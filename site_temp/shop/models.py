from django.db import models
import sqlalchemy as db
from sqlalchemy import Table, Column, Integer, ForeignKey, Enum, String, update, delete, Boolean, Float, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

Base = declarative_base()

# Create your models here.
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
