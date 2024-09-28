# Lupbook Project FQ24 - Screening Test
The main aim of this repo is to implement the light-mode/dark-mode issue for FQ24  Screening Test.

**Workflow:**

- Cloning the Repository.
- Installing Dependencies.
- Running the Build Command: Executing the ```make``` command that triggers the build process, and generates the output file ```book.html```.
- Making modifications as instructed.
- Pushing the code. (In my case I pushed the code in a new repository in order to avoid any kind of automations, if any in the main repo)

**```A Kind Request to Professor Joël:```** If you have any questions or need clarification regarding my approach, please feel free to reach out to me at: `preyadav@ucdavis.edu`. I would be happy to share the `book.html` file and the commands I used to install the dependencies.
Thank you!

## 1) Toggle Switch Functionality:

First implementation of a simple toggler. We start in light mode by default, using data-bs-theme="light" on the HTML tag, and can switch to "dark" from a button in the right sidebar.

## Demonstration⬇️

![Lupbook-Fq24-issue-gif](https://github.com/user-attachments/assets/727d0f96-47cd-4d1c-84fa-27c520515335)

**Note: Please visit [here](https://drive.google.com/file/d/1BQbrzCimTST-OyUa-9MdiQiPyUx0_kew/view?usp=sharing) for a clearer video demonstration.**

## Code

### HTML Code:
As it was instructed that the toggle switch should be in the right sidebar, hence the toggle switch element was added in the Unordered list 
```<ul>``` as a list item ```<li>``` The input type ```checkbox``` is used to handle the state change of the theme effectively. 
```
 <!-- Dark Mode Toggle Switch - Preyash Yadav -->
      <input type="checkbox" id="theme-toggle">
```

### CSS Code:
To ensure a good user experience, the toggle button was designed to have light color theme in the light mode and a dark color theme when switched to dark mode.
```
<!-- CSS for Toggle Switch - Preyash Yadav -->
<style>
input {
    -webkit-appearance: none;
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 25px;
    background-color: yellow; /* Light mode default color */
    transition: background 0.3s ease;
    outline: none;
    cursor: pointer;
    border: none;
}
/* Circle inside the switch */
input::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: white;
    transition: left 0.3s ease;
}
/* Dark mode active */
input:checked {
    background-color: #001f3f; /* Night blue for dark mode */
}
/* Move the circle when toggled */
input:checked::after {
    left: 75%;
}
</style> 
```

### JavaScript Code - For theme change on toggling switch
```
<!-- Java Script for Dark Mode Toggle Switch - Preyash Yadav -->
<script>
   document.getElementById('theme-toggle').addEventListener('click', function() {
       const htmlTag = document.documentElement; // Get the <html> element
       const currentTheme = htmlTag.getAttribute('data-bs-theme');

       // Toggle between light and dark themes
       if (currentTheme === 'light') {
           htmlTag.setAttribute('data-bs-theme', 'dark');
       } else {
           htmlTag.setAttribute('data-bs-theme', 'light');
       }
   });
</script>
```


## 2) Default System Choice Functionality:

An auto option that follows the default system choice

## Demonstration⬇️
![LupLabLupbookProjectVideoDemonstration-2-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/59999794-c8de-4388-9e4e-986722707cd1)

**Note: Please visit [here](https://drive.google.com/file/d/1W7qPW_D60ZjeTBDYIanb-bAlqFuv9-WI/view?usp=sharing) for a clearer video demonstration.**

### JavaScript Code - For theme change on based on device preference/ default system choice

```
<!-- Java Script for Auto Toggle - Preyash Yadav -->
<script>
const htmlTag = document.documentElement; // Get the <html> element
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDark) {
    htmlTag.setAttribute('data-bs-theme', 'dark');
} else {
    htmlTag.setAttribute('data-bs-theme', 'light'); // Optional: set to light theme if preferred
}
</script>
```

## 3) Color Theme:
The current color theme and UI can be further changed based on the project requirements

