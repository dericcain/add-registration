# MobX

## Overview
- What is it?
- Philosophy
- API
- Patterns

## What is it?
MobX is an unopinionated, JavaScript state management solution.
- React
- Vue
- Angular

## The MobX philosophy
- Embrace mutable state - just update values
    - Non-normalized data
    - Recursive references
- Create observables and then derive as much state as possible. Changes are reflected automatically
- State changes are synchronous (easy to reason about)
- How it works (React)
    1. Make something observable
    2. Add computed properties that are derived data from observables
    3. Change observable data
    4. Computed properties are re-computed (if needed)
    5. Observers are notified of change
    6. Re-render components (if needed)

## API
1. Decorators
    - `decorate(SomeModel, { propertyName: observable, someGetter: computed })` - Decorate API
2. Observables
    - `observable()` - Recursive observable (shorthand)
    - `observable.shallow()` - Shallow observable
    - `observable.object()` - Observable object
    - `observable.array()` - Observable array
    - `observable.map()` - Observable map
    - `observable.box()` - Observable primitive
    - `observable.ref()` - Observable reference notifies of reference changes
    - `observable.struct()` - Only notifies if an object structure has changed (could be a different reference with same value)
3. Computed Properties
4. Actions
    - Batched updates
    - Asynchronous code

## Patterns
5. Models
    - Classes (Smart)
    - Objects (Simple)
    - Maps (Array like)
6. Stores
    - Root Store Pattern
        - Inject dependencies (makes testing easy)
    - Multi-Store Pattern
7. React Components
    - Inject
    - Observe
