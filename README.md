# Lab 5 - Starter
Jensen Guo [https://jguo55.github.io/Lab5_Starter/explore.html](explore) [https://jguo55.github.io/Lab5_Starter/expose.html](expose)


1. You would not use a unit test to test the "message" feature of an application. This feature requires many moving parts and multiple components at once to function, so it's more appropriate for an E2E test.

2. Yes, you would test "max message length". This is because you could very easily write a few of these test cases and see if there is a proper flag/handling of the tests. For example, I could write a message with 100 characters and check that my message handler doesn't let me send it.