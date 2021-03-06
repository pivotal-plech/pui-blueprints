#Pivotal UI Blueprints
##Overview
Pivotal UI is a component library built in CSS and React.js. It has helped both design and engineering quickly prototype and evolve the front-end user interfaces at Pivotal Cloud Foundry.

##Problem Statement
Pivotal UI was designed to provide a common library to designers and engineers to ensure brand integrity for Pivotal User Interfaces and Interactions across multiple product teams.
We have observed that there are slight inconsistencies for larger components and layouts. Designers have expressed that it takes too long to build out generic layouts and components.
How might we improve the experience to more quickly scaffold out workflows and reduce the amount of time designers/prototypes spend building prototypes?

##Personas
- **Designer/Prototyper**
- Engineer

This initiative is focusing more on the **Designer/Prototyper** and to improve the experience of quickly scaffolding out new prototypes to test and validate.

##Hypotheses
We believe designers have a problem re-building common components that are not yet in Pivotal UI library.
We can help them with a collection of larger components currently not canonized in Pivotal UI.
We'll know we're right if teams copy and paste our components in their applications.

##Getting Started

clone the repo:
```
git clone git@github.com:pivotal-plech/pui-blueprints.git && cd pui-blueprints
```

install all the npm modules:

```
npm i
```

start the server:

```
gulp serve
```

This repo is using the [yeoman generator react-reflux](https://github.com/tfaga/generator-react-reflux). To take full advantage of some of the generators, you'll need to install yeoman and the generator:

Install `Yeoman`:

```
npm install -g yo
```

Install `generator-react-reflux`:

```
npm install -g generator-react-reflux
```

##Contributing
Pull requests are welcome. Build out your own component and PR for Review :)

Contact shurst@pivotal.io if you have any questions.
