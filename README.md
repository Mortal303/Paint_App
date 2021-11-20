# Paint_App
A simple paint app using JavaScript to create rectangle on canvas element on mouse drag

Please checkout

https://mortal303.github.io/Paint_App/




# Pseudo-elements

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph.

```
/* This will change first line of every <p> element to red color. */
p::first-line {
  color: red;
  text-transform: lowercase;
}
```


**Note:** Instead of pseudo-elements,[pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) can be used to style an element based on its *state*.

## Syntax

```    
selector::pseudo-element{
  property: value;
}  
```

You can use only one pseudo-element for a selector. It must appear after the simple selectors in the statement.


***Note:*** 
```
As a rule, double colons (::) are preffered instead of a single colon (:). This distinguishes pseudo-classes from psedo-elements.However, since this distinction was not present in older versions of the W3C spec, most browsers support both syntaxes for the original pseudo-elements.
```
## Index
Pseudo-elements defined by a set of CSS specifications include the following:

A 
    
   -    ``` [::after (:after)] ```(https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
   

B
    
   -     ``` [::backdrop] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)
   -     ``` [::before (:before)] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
     
C  

   -    ``` [::cue] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/:⛑️)
   -    ``` [::cue-region ] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::cue-region)

F

   -    ``` [::first-letter(:first-letter)] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)
   -    ``` [::first-line(:first-line)] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)
   -    ``` [::file-selector-button(:first-letter)] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)


G

   -     ```[::grammar-error]```(https://developer.mozilla.org/en-US/docs/Web/CSS/::grammar-error)


M

   -    ``` [::marker]  ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)


P

   -    ``` [::part()] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/:〽️)
   -    ``` [::placeholder()] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
    
S

   -    ``` [::selection] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
   -    ``` [::slotted()] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)
   -    ``` [::spelling-error] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::spelling-error)
 
 
T

   -   ```  [::target-text] ``` (https://developer.mozilla.org/en-US/docs/Web/CSS/::target-text)
 
