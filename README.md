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


***Note:*** As a rule, double colons (::) are preffered instead of a single colon (:). This distinguishes pseudo-classes from psedo-elements.However, since this distinction was not present in older versions of the W3C spec, most browsers support both syntaxes for the original pseudo-elements.

## Index
Pseudo-elements defined by a set of CSS specifications include the following:

A 
    
   -    ``` [::after (:after)]```
   

B
    
   -     [::backdrop]
   -     [::before (:before)]  
     
C  

   -    ``` [::cue] ``` 
   -    ``` [::cue-region ] ``` 

F

   -    ``` [::first-letter(:first-letter)] ``` 
   -    ``` [::first-line(:first-line)] ```
   -    ``` [::file-selector-button(:first-letter)] ```


G

   -  ``` [::grammar-error] ```


M

   -    ``` [::marker]  ```
P

   -    ``` [::part()] ```
   -    ``` [::placeholder()] ```
    
S

   -    ``` [::selection] ```
   -    ``` [::slotted()] ```
   -    ``` [::spelling-error] ```
 
 
T

   -   ```  [::target-text] ```
 
