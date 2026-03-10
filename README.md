# TypeScript OOP Test - Weasel Class

This project is a simple demonstration of **Object-Oriented Programming (OOP)** principles using TypeScript. It defines a class representing a weasel ("Doninha") and showcases object instantiation, property defaults, and method execution.

## 🚀 Features

* **Class Definition:** Implementation of a `Doninha` class with typed properties.
* **Constructors:** Custom constructor allowing for default values for color and age.
* **Behavioral Methods:** Methods that simulate real-world actions like hunting (`cacar`) and hiding (`esconder`).
* **Object Instantiation:** Demonstration of creating multiple instances with different parameters.

## 🛠️ Logic Breakdown

### The `Doninha` Class
The class includes three main properties:
1.  `nome` (string): The name of the weasel.
2.  `cor` (string): The fur color (defaults to "Castanho").
3.  `idade` (number): The age (defaults to 1).

### Actions
* **cacar():** Logs a message about the weasel hunting rodents.
* **esconder():** Logs a message about the weasel hiding in its burrow.

## 💻 How to Run

1.  **Install dependencies:** Ensure you have `typescript` and `ts-node` installed.
2.  **Execute the script:**
    ```bash
    npx ts-node index.ts
    ```

## 📝 Usage Examples

The script performs the following operations:

```typescript
// Create a specific weasel
const doninha1 = new Doninha("Fura", "Branco", 2);

// Create a weasel with default values
const doninha2 = new Doninha("Ligeira");

// Execute actions
doninha1.cacar(); // Output: A doninha Fura está caçando pequenos roedores!
doninha2.esconder(); // Output: A doninha Ligeira se escondeu rapidamente na toca.
