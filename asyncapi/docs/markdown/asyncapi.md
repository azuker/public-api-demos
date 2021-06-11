# Library API 1.0.0 documentation

The Library API allows you to remotely add books to the library.
## Table of Contents

* [Servers](#servers)
* [Channels](#channels)

## Servers

### **production** Server

| URL | Protocol | Description |
|-|-|-|
| mqtt://test.mosquitto.org | mqtt | - |

## Channels

### **publish/book/transaction** Channel

#### `publish` Operation

##### Message

###### Payload

| Name | Type | Description | Accepted values |
|-|-|-|-|
| Id | integer | - | _Any_ |
| TransactionType | string | - | Loan, Return |

> Examples of payload _(generated)_

```json
{
  "Id": 0,
  "TransactionType": "Loan"
}
```




### **subscribe/book/inventory** Channel

#### `subscribe` Operation

##### Message

###### Payload

| Name | Type | Description | Accepted values |
|-|-|-|-|
| Id | integer | - | _Any_ |
| Name | string | - | _Any_ |
| Quantity | integer | - | _Any_ |

> Examples of payload _(generated)_

```json
{
  "Id": 0,
  "Name": "string",
  "Quantity": 0
}
```




