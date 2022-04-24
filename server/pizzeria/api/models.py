from django.db import models
from djmoney.models.fields import MoneyField
from django.conf import settings

class Order(models.Model):
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    dt = models.DateTimeField()
    total = MoneyField(max_digits=14, decimal_places=2, default_currency='RUR')
    payedWith = models.CharField(max_length=20)

class MenuItem(models.Model):
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='RUR')
    name = models.CharField(max_length=20)

class MenuItemOrder(models.Model):
    class Meta:
        constraints = [models.UniqueConstraint(fields=['menuitem', 'orderID'], name = 'item_order_pk')]
    menuitem = models.ForeignKey(MenuItem, on_delete=models.PROTECT)
    orderID = models.ForeignKey(Order, on_delete=models.PROTECT)
    quantity = models.IntegerField()
