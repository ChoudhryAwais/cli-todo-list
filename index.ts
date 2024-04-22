#! /usr/bin/env node

import inquirer from "inquirer";
const todoList: Array<string> = [];
let loop = true

while (loop) {
  let options = await inquirer.prompt([
    {
      name: "todoOptions",
      message: "Select from below:-",
      type: "list",
      choices: ["Add new item", "Todo List"]
    },
  ]);
  if (options.todoOptions === "Add new item") {
    let todoItem = await inquirer.prompt([
      {
        name: "item",
        message: "Enter the todo item",
        type: "string",
      },
    ]);
    todoList.push(todoItem.item)
  } else {
    todoList.forEach(element => {
      console.log(element)
    });
    loop = false
  }
}

