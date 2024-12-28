# Unnecessary useEffect Call in React Component

This repository demonstrates a common React bug involving the `useEffect` hook being called more often than necessary.  The example showcases an inefficient implementation that leads to performance degradation and potential errors within side effects.  The solution provides a corrected implementation, illustrating best practices for using the `useEffect` hook.

## Problem:

The original `MyComponent` function utilizes the `useEffect` hook to log the current count and perform a side effect (`someExternalFunction`) whenever the `count` state updates.  However, the dependency array `[count]` is incorrectly causing the `useEffect` to trigger every time the `count` state changes, regardless of the actual need for the side effect. This creates inefficiencies and potential issues such as duplicated requests or unintended state updates.

## Solution:

The solution provided optimizes `useEffect` by adding conditional logic within the effect function itself.  This ensures the side effect is only executed under certain conditions. For example, performing the side effect only when the count is a multiple of 5.