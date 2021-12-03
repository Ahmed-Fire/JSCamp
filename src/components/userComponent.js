import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import UserService from "../services/userServices.js"

console.log("User Component Loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Ahmed", "Emad", "Irbil")
let user2 = new User(2, "Engin", "Demirog", "Ankara")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//userService.getById(1)
//userService.list()

let customer = {id:1, firstName:"Ahmed"}

//prototyping
customer.lastName = "Emad"

console.log(customer.lastName)

console.log("---------------------------")
userService.load()


let customerToAdd = new Customer(1, "Payam", "Faris", "Irbil", "21a")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employee)
console.log(userService.errors)
console.log(userService.getCustomersSorted())