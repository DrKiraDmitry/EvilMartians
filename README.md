[Demo]('https://www.kiraworld.space/')

# This is a test task for the evil martians

The purpose of this task is to demonstrate the code by making a convenient and beautiful form of authentication through mail and password - but without ready-made component libraries. Consideration should be given to sending mail/password to the server, but the server can be omitted by simply locking `fetch()`.

##I did not use:

- State manager Mobx, because it is not needed here, the application is small, the nesting is small. As a last resort, if a manager is needed, I would use useContext
- Sass preprocessor, because it is not needed here, the built-in variables in css are enough for me, the design is quite simple and does not require the capabilities of sass.
- UI component libraries, because this is required by the task, but it's useless here, the only thing I spied on was the dark theme color scheme
