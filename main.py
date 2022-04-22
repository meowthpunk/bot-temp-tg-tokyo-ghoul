import sqlalchemy as db
from sqlalchemy import Table, Column, Integer, ForeignKey, Enum, String, update, delete, Boolean, Float, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
# create a configured "Session" class

template = [[1, 15], [3, 2], [4, 10]]
template2 = [[2, 4], [4, 2], [7, 5], [8, 1], [1, 2]]


Base = declarative_base()

DATABASE_NAME = 'application.sqlite'


engine = db.create_engine(f'sqlite:///{DATABASE_NAME}')

connection = engine.connect()


class Customer(Base):
    __tablename__ = 'customer'
    customer_id =  Column(Integer, primary_key=True)
    userid = Column(Integer)
    phone_number = Column(String)
    card_number = Column(Integer)
    address = Column(String)
    order = relationship('Order')

    def __init__(self, userid):
        self.userid = userid

class Order(Base):
    __tablename__ = 'order'
    order_id =  Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customer.customer_id')) # foreignKey
    cost = Column(Float)
    status_pay = Column(Boolean, default = False)
    status_delivery = Column(Boolean, default = False)
    date_created = Column(DateTime(timezone=True), server_default=func.now())
    date_updated = Column(DateTime(timezone=True), onupdate=func.now())
    order_product = relationship('Order_product')

    def __init__(self, customer_id):
        self.customer_id = customer_id

class Order_product(Base):
    __tablename__ = 'order_product'
    order_product_id = Column(Integer, primary_key=True)
    order_id =  Column(Integer, ForeignKey('order.order_id')) # foreignKey
    product_id = Column(Integer, ForeignKey('product.product_id')) # foreignKey
    quantity = Column(Integer)

    def __init__(self, order_id, product_id, quantity):
        self.order_id = order_id
        self.product_id = product_id
        self.quantity = quantity

class Product(Base):
    __tablename__ = 'product'
    product_id =  Column(Integer, primary_key=True)
    name_product = Column(String)
    category_id = Column(Integer, ForeignKey('product_category.product_category_id'))
    image = Column(String)
    price = Column(Float, default = 0.0)
    order_product = relationship('Order_product')

    def __init__(self, name_product, category_id, price):
        self.name_product = name_product
        self.category_id = category_id
        self.price = price

class Product_category(Base):
    __tablename__ = 'product_category'
    product_category_id =  Column(Integer, primary_key=True)
    name_product_category = Column(String)
    product = relationship('Product')

    def __init__(self, name_product_category):
        self.name_product_category = name_product_category

Base.metadata.create_all(bind=engine)



Session = sessionmaker(bind=engine)
session = Session()

def createUser(userid):
    createItem = Customer(userid)
    session.add(createItem)
    session.commit()
    session.close()

def createProductCategory(name_product_category):
    createItem = Product_category(name_product_category)
    session.add(createItem)
    session.commit()
    session.close()

def createProduct(name_product, category_id, price):
    createItem = Product(name_product, category_id, price)
    session.add(createItem)
    session.commit()
    session.close()

# def createOrder(customer_id):
#     createItem = Order(customer_id)
#     session.add(createItem)
#     session.commit()
#     order_id = createItem.order_id
#     session.close()
#
#
# def createOrderProduct(order_id, product_id, quantity):
#     createItem = Order_product(order_id, product_id, quantity)
#     session.add(createItem)
#     session.commit()
#     session.close()

def insertCustomerPhone(customer_id, phone_number):
    stmt = update(Customer).where(Customer.customer_id == customer_id).values(phone_number = phone_number).execution_options(synchronize_session="fetch")
    session.execute(stmt)
    session.commit()

def insertCustomerCard(customer_id, card_number):
    stmt = update(Customer).where(Customer.customer_id == customer_id).values(card_number = card_number).execution_options(synchronize_session="fetch")
    session.execute(stmt)
    session.commit()

def insertCustomerAddress(customer_id, address):
    stmt = update(Customer).where(Customer.customer_id == customer_id).values(address = address).execution_options(synchronize_session="fetch")
    session.execute(stmt)
    session.commit()

# createUser(12345678)
# insertCustomerPhone(5, 374091186495)
# insertCustomerCard(5, 7777888899990000)
# insertCustomerAddress(5, 'в пизде у волка')

def productCost(product_id):
    price = session.query(Product).filter(Product.product_id == product_id).all()
    return price[0].price

def createOrder(customer_id, productList):

    orderCost = 0

    createItemOrder = Order(customer_id)
    session.add(createItemOrder)
    session.commit()

    order_id = createItemOrder.order_id

    for product in range(len(productList)):
        createItemOrderProduct = Order_product(
            order_id,
            productList[product][0],
            productList[product][1]
            )
        orderCost += productCost(productList[product][0]) * productList[product][1]
        session.add(createItemOrderProduct)
        session.commit()

    upd = update(Order).where(Order.order_id == order_id).values(cost = orderCost).execution_options(synchronize_session="fetch")
    session.execute(upd)
    session.commit()
    session.close()

def updateOrder(productList, order_id):
    orderUpdCost = 0

    stmt = delete(Order_product).where(Order_product.order_id == order_id).execution_options(synchronize_session="fetch")
    session.execute(stmt)
    session.commit()


    for product in range(len(productList)):
        createItemOrderProduct = Order_product(
            order_id,
            productList[product][0],
            productList[product][1]
            )
        orderUpdCost += productCost(productList[product][0]) * productList[product][1]
        session.add(createItemOrderProduct)
        session.commit()

    upd = update(Order).where(Order.order_id == order_id).values(cost = orderUpdCost).execution_options(synchronize_session="fetch")
    session.execute(upd)
    session.commit()

def deleteOrder(order_id):
    stmt = delete(Order_product).where(Order_product.order_id == order_id).execution_options(synchronize_session="fetch")
    upd = delete(Order).where(Order.order_id == order_id).execution_options(synchronize_session="fetch")
    session.execute(stmt)
    session.execute(upd)
    session.commit()


def queryCategory(product_category_id):
    productList = session.query(Product).join(Product_category.product).filter(Product_category.product_category_id == product_category_id).all()
    return productList

def queryCustomerOfOrder(order_id):
    stmt = session.query(Customer).join(Customer.order).filter(Order.order_id == order_id).all()
    return stmt

# print(queryCustomerOfOrder(17)[0].address)

# createOrder(5, template2)

# deleteOrder(10)
# print(querryCategory(3)[1].name_product)
# print(querryCategory(3)[1].price)
# createProductCategory('pizza')
# createProductCategory('bugrgers')
# createProductCategory('potato')

# mainCreateOrder(1, template)

# updateOrder(template2, 12)
# createOrder(1, template)

# createProduct('margaritta', 1, 15)
# createProduct('4 cheese', 1, 10)
# createProduct('hawai', 1, 12)
# createProduct('shavarma', 2, 5)
# createProduct('big-mak', 2, 7)
# createProduct('longburg', 2, 8)
# createProduct('frie', 3, 2)
# createProduct('village', 3, 4)



# stmt = update(Order).where(Order.order_id == 9).values(cost = 299).execution_options(synchronize_session="fetch")
# session.execute(stmt)
# session.commit()


# mainCreateOrder(2, template)

#
# # createuser = Customer(12345678)
# # session.add(createuser)
#
# createorder = Order(2, 300)
# session.add(createorder)
#
# session.commit()
# session.close()

# ---- доставание через кей
# all = session.query(Order).join(Customer.order).filter(Customer.customer_id == 2).all()

# print(all[1].cost)

    # item = Order_product(6, 4, 1)
    #
    #
    # session.add(item)
    #
    # session.commit()
    # session.close()

# id = 1
#
# cost = session.query(Order).filter(Order.order_id == id).all()
# product = session.query(Order_product).filter(Order_product.order_id == id).all()
# item1 = []
# item2 = []
# item3 = []
# # hui2 = session.query(Product).filter(Product.product_id == gavno).all()
#
# for int in range(len(product)):
#     item1.append(session.query(Product).filter(Product.product_id == (product[int].product_id)).all())
#     item2.append(product[int].quantity)
#     item3.append(item1[int][0].name_product)
#
#
#
# def createOrder():
#     ...
#
#
#
#
#
# os.system("cls")
# print('Вы заказали:')
# for i in range(len(item2)):
#     print(f"{item2[i]} {item3[i]}")
#
# print(f"Стоимость: {cost[0].cost}")
