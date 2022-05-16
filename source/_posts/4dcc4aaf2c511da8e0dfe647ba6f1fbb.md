---
title: What is RegExp
description: Regular Expression is a
author: noreply@blogger.com (Dimas Lanjaka)
url: https://www.webmanajemen.com/RegExp/RegExp.html
date: 2021-09-21T17:00:00.000Z
updated: 2021-09-21T17:00:00.000Z
---

## What Is Regular Expression ?
Regular Expression (RegExp) a sequence of symbols and characters expressing a string or pattern to be searched for within a longer piece of text. [Read More](https://en.wikipedia.org/wiki/Regular_expression)

## What can a regular expression be used for ?
A regular expression can be a single character, or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replace operations. /w3schools/i is a regular expression.

## Which is the best example of a regex ?
- **Anchors — ^ and $**
  | RegExp                      | Explanations                                                                                   |
  | --------------------------- | ---------------------------------------------------------------------------------------------- |
  | ^Hello               | matches any string that _starts with **Hello**_ ->  [Try it!](https://regex101.com/r/cO8lqs/2) |
  | world$               | matches a string that _ends with **world**_                                                    |
  | ^Hello world$ | _exact string match_ (starts and ends with **Hello world**)                                    |
  | Hello                       | _matches any string_ that has the text **Hello** in it                                         |

- **Quantifiers — * + ? and {}**
  | RegExp              | Explanations                                                                                           |
  | ------------------- | ------------------------------------------------------------------------------------------------------ |
  | abc*                | matches a string that has ab followed by zero or more c ->  [Try it!](https://regex101.com/r/cO8lqs/1) |
  | abc+                | matches a string that has ab followed by one or more                                                   |
  | abc?         | matches a string that has ab followed by zero or one                                                   |
  | abc{2}       | matches a string that has ab followed by 2                                                             |
  | abc{2,}      | matches a string that has ab followed by 2 or more                                                     |
  | abc{2,5}     | matches a string that has ab followed by 2 up to 5                                                     |
  | ca(bc)*      | matches a string that has a followed by zero or more copies of the sequence                            |
  | bca(bc){2,5} | matches a string that has a followed by 2 up to 5 copies of the sequence bc                            |

- **OR operator — | or []**
  | RegExp      | Explanations                                                                                                                         |
  | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
  | a(b|c) | matches a string that has **_a_ followed by _b_ or _c_** (and captures **_b_ or _c_**) -> [Try it!](https://regex101.com/r/cO8lqs/3) |
  | a[bc]       | same as previous, **but without capturing _b_ or _c_**                                                                               |

- **Character classes — \d \w \s and .**
  | RegExp | Explanations |
  | ------ | ------------ |<hr/> <a href="https://www.webmanajemen.com/RegExp/RegExp.html" rel="follow" class="button" id="read-more">Read More</a>