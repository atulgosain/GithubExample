## Markdown Examples
- [headings](#headings)
- [Unordered list](#unorder-list)
- [Ordered list](#unorder-list)
- [text formatting](#text-formating)
- [code](#code)
- [tables](#table)
- [BlockQuotes](#blockquotes)
- [links](#links)
- images
- autolists
- lists
- [footnote](#FootNote)

https://github.github.com/gfm/

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


## Headings

# Heading1
## Heading2
### Heading3



## Unorder List

We can create unOrdered lists in Markdown using hypens.
  
- foo
- bar
- baz

+ baz  
+ foo1
+ bar


## Ordered List
1. foo
2. bar
3. baz


1. foo
1. bar
1. baz
1)  rec


## Text formating
*italics*  
__bold__  
**bold**  
***Bold and Italics*** 

~~strikethrough~~


## Code

### Inline code
You can print in the terminal using the inline code:`puts "Hello World"`


### MultiLine Code 

 ### Without Highlighting
 ```
 def hello_world
 puts "Hello World"
 end
```

 ### With HighLighting 
 We cann use rb(ruby), sh, json
```rb
 def hello_world
 puts "Hello World"
 end
```
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```


## Table  

| foo | bar |
| --- | --- |
| baz | bim |

### Not Recognized
| abc | def |
| --- |
| bar |


### Recognized
| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |

### No Body just Header

| abc | def |
| --- | --- |

#### Boo is missing as it has extra element

### Including inside other inline spans  


| f\|oo  |
| ------ |
| b `\|` az |
| b **\|** im |

## BlockQuotes 
> "The cloud is amazing"  

  > # Foo  
    > bar
 > baz

 > - foo
- bar

## Images


## Links

[Secret Page](secret.md)

[GitHubWebSite](https://github.com)

## Tasklists
- [ ] Item1
- [ ] Item2

- [x] foo
  - [ ] bar
  - [x] baz
- [ ] bim  


- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Emojis
Hi  My name is Atul 

:Atul:

## FootNote
[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
