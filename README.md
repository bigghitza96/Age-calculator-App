# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- 
### Links

- Solution URL: (https://bigghitza96.github.io/Age-calculator-App/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:
The major learnings while while working through this project were :

```css
- CSS variable
:root{
    --White: hsl(0, 0%, 100%);
}
flex-direction - column property

.input-container{
    display: flex;
    flex-direction: column;
}
```

```js
The unary plus operator
if (+input_year.value > 2023 )

`${}` - it allows you to embed expressions or variables within a string.

let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`
```


## Author
- GitHub - [@bigghitza96](https://github.com/bigghitza96)
- Frontend Mentor - [@bigghitza96](https://www.frontendmentor.io/profile/bigghitza96)
  
## Acknowledgments

You can find some interesting and well explained tutorials on  @techupfront page on youtube. 

