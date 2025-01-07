## Markdown Examples
- [headings](#headings)
- [Unordered list](#unorder-list)
- [Ordered list](#unorder-list)
- [text formatting](#text-formating)
- [code](#code)
- [tables](#table)
- BlockQuotes
- links 
- images
- autolists
- lists

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
+ baz

## Ordered List

1. foo
2. bar
3) baz

1. foo
1. bar
1. baz

## Text formating

*italics*  
__bold__  
**bold**

~~strikethrough~~


## Code

### Inline code
`puts "Hello World"`


### MultiLine Code
 

 ### Without Highlighting
 ```
 def hello_world
 puts "Hello World"
 end
```

 ### With HighLighting
```sh
 def hello_world
 puts "Hello World"
 end
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

#### Boo is missing as it has extra element

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
