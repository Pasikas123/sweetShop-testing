# TS.1. Main page

## TC.1.1. Page has title
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe page title

Expected result: Page has title 'Sweet Shop'
Actual result:

STATUS: PASS.

## TC.1.2. Page has navigation bar
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe navigation bar 

Expected result: Page has the navigation bar which contains: Sweet Shop(with logo), Sweets, About, Login, Basket.
Actual result:

STATUS: PASS.

## TC.1.2.1 Navigation 'Sweet Shop' functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press 'Sweet Shop' attribute in navigation bar
* 3. Observe page

Expected result: Main page opens again
Actual result:

STATUS: PASS.

## TC.1.2.2 Navigation 'Sweets' functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press 'Sweets' attribute in navigation bar
* 3. Observe 'Sweets' page

Expected result: 'Sweets' page opens
Actual result:

STATUS: PASS.

## TC.1.2.3 Navigation 'About' functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press 'About' attribute in navigation bar
* 3. Observe 'About' page

Expected result: 'About' page opens
Actual result:

STATUS: PASS.

## TC.1.2.4 Navigation 'Login' functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press 'Login' attribute in navigation bar
* 3. Observe 'Login' page

Expected result: 'Login' page opens
Actual result:

STATUS: PASS.

## TC.1.2.5 Navigation 'Basket' functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press 'Basket' attribute in navigation bar
* 3. Observe 'Basket' page

Expected result: 'Basket' page opens
Actual result:

STATUS: PASS.

## TC.1.3. Page has the correct banner
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe page banner 

Expected result: Page has the banner.
Actual result:

STATUS: PASS.

## TC.1.4. Page has the header
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe page header

Expected result: Page has header: "Welcome to the sweet shop!"
Actual result:

STATUS: PASS.

## TC.1.5. Page has the description
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe page description

Expected result: Page has description: "The sweetest online shop out there."
Actual result:

STATUS: PASS.


## TC.1.6.1 Page has browse sweets button
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe button

Expected result: Page has Browse Sweets button
Actual result:

STATUS: PASS.

## TC.1.6.2 Button Browse Sweets functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Browse Sweets button
* 3. Observe 'Sweets' page

Expected result: 'Sweets' page opens up
Actual result:

STATUS: PASS.

## TC.1.7.1 Page has the most popular choices
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe popular choices

Expected result: Page has most popular choices items list with add to basket buttons.
Actual result:

STATUS: PASS.

## TC.1.7.2 Add to basket single item
* 1. Enter https://sweetshop.netlify.app/
* 2. Add to basket: "Sherbert Straws"
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open main page
2. Adds item to basket
3. Basket count becomes "1"
4. Opens Basket page
5. Basket contains: 
Sherbert Straws £0.75
x 1
Total (GBP) £0.75

Actual result:

STATUS: PASS.


## TC.1.7.3 Add to basket two same items
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to basket: "Sherbert Straws" 2 times
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open main page
2. Adds items to basket
3. Basket count becomes "2"
4. Opens Basket page
5. Basket contains: 
Sherbert Straws £0.75
x 2
Total (GBP) £1.50

Actual result:

STATUS: PASS.


## TC.1.7.3 Add to basket multiple items
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to basket: Sherbert Straws, Chocolate Cups, Sherbert Discs, Bon Bons.
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open main page
2. Adds items to basket
3. Basket count becomes "4"
4. Opens Basket page
5. Basket should contain all items with correct values (total: £3.70, every item x1)

Actual result:

STATUS: PASS.

## TC.1.8. Page has the footer
* 1. Enter https://sweetshop.netlify.app/
* 2. Observe footer

Expected result: Page has the footer which is: 'Sweet Shop Project 2018'.
Actual result:

STATUS: PASS.


# TS.2. Login page

## TC.2.1.1 Login page has title and description
* 1. Enter https://sweetshop.netlify.app/login
* 2. Observe title and description

Expected result: Page has title 'Login' and description: Please enter your email address and password in order to login to your account.

Actual result:

STATUS: PASS.


## TC.2.1.2 Login page has textboxes
* 1. Enter https://sweetshop.netlify.app/login
* 2. Observe textboxes

Expected result: Page has 'username' and 'password' textboxes.

Actual result: Page has 'email' and 'password' textboxes.

STATUS: FAIL.


## TC.2.2.1 Login with valid data
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe Your Account page

Expected result: Login should be successful and show greeting message.

Actual result:

STATUS: PASS.


## TC.2.2.2 Login without email
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type password: test
* 3. Press login button
* 4. Observe error message

Expected result: Should show error message: 'Please enter a valid email address.'

Actual result: 

STATUS: PASS.

## TC.2.2.3 Login with numbers in email
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: 123123
* 3. Type password: test
* 4. Press login button
* 5. Observe error message

Expected result: Should show error message: 'Please enter a valid email address.'

Actual result: 

STATUS: PASS.

## TC.2.2.4 Login with wrong email format
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test
* 3. Type password: test
* 4. Press login button
* 5. Observe error message

Expected result: Should show error message: 'Please enter a valid email address.'

Actual result: 

STATUS: PASS.

## TC.2.2.5 Login with no password
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Press login button
* 4. Observe error message

Expected result: Should show error message: 'Please enter a valid password.'

Actual result:

STATUS: PASS.

## TC.2.2.6 Login with only numbers in password
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: 123123
* 4. Press login button
* 5. Observe error message

Expected result: Should show error message: 'Please enter a valid password.'

Actual result: Login is successful and shows greeting message.

STATUS: FAIL.

## TC.2.2.7 Login with empty data
* 1. Enter https://sweetshop.netlify.app/login
* 2. Press login button
* 3. Observe error message

Expected result: Should show error messages: 'Please enter a valid email address.', 'Please enter a valid password.'

Actual result:

STATUS: PASS.

## TC.2.2.8 Twitter link
* 1. Enter https://sweetshop.netlify.app/login
* 2. Press Twitter button under login button
* 3. Observe twitter page

Expected result: Should redirect to twitter website.

Actual result: Nothing happens, staying at the same login page.

STATUS: FAIL.

## TC.2.2.9 Facebook link
* 1. Enter https://sweetshop.netlify.app/login
* 2. Press Facebook button under login button
* 3. Observe Facebook page

Expected result: Should redirect to Facebook website.

Actual result: Nothing happens, staying at the same login page.

STATUS: FAIL.

## TC.2.2.10 Linkedin link
* 1. Enter https://sweetshop.netlify.app/login
* 2. Press Linkedin button under login button
* 3. Observe Linkedin page

Expected result: Should redirect to Linkedin website.

Actual result: Nothing happens, staying at the same login page.

STATUS: FAIL.


# TS.3. Your account page

## TC.3.1.1 Header is visible
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe Your Account page

Expected result: Your Account header should be visible.

Actual result:

STATUS: PASS.

## TC.3.1.2 Description is visible
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe Your Account page

Expected result: Description should be: Welcome back test@gmail.com.

Actual result: Description is: Welcome back test@user.com

STATUS: FAIL.

## TC.3.1.3 Previous orders are visible
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe Your Account page

Expected result: Your previous orders should be visible.

Actual result:

STATUS: PASS.

## TC.3.1.4 Item Order Breakdown is visible
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe Your Account page

Expected result: Your Item Order Breakdown should be visible.

Actual result:

STATUS: PASS.

## TC.3.2. Description attribute
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Observe description attribute
* 5. Press attribute test@user.com
* 6. Observe page

Expected result: Attribute shouldn't even exist, it should only appear as plain text.

Actual result: Attribute exists, when pressing it, nothing happens.

STATUS: FAIL.

## TC.3.3.1 Sorting by number
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Number attribute

Expected result: Orders should sort by descending order.

Actual result: After clicking press Order Number attribute, nothing happens.

STATUS: FAIL.

## TC.3.3.2 Sorting by number by double click (desc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Number attribute 2 times

Expected result: Orders should sort by descending order.

Actual result:

STATUS: PASS.

## TC.3.3.3 Sorting by number by triple click (asc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Number attribute 2 times
* 6. Press Order Number attribute 1 time

Expected result: 
5. Orders should sort by descending order.
6. Orders should get back by sorting with ascending order

Actual result:

STATUS: PASS.

## TC.3.3.4 Sorting by date (desc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Date Ordered attribute

Expected result: Orders should sort by date descending order.

Actual result:

STATUS: PASS.

## TC.3.3.5 Sorting by date (asc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Date Ordered attribute
* 6. Press Date Ordered attribute one more time

Expected result:
5. Orders should sort by date descending order.
6. Orders should sort by date ascending order

Actual result:

STATUS: PASS.


## TC.3.3.6 Sorting by Order Description (desc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Description attribute

Expected result: Orders should sort by alphabet descending order (Swansea Mixture x 1 should be in first place)

Actual result: Orders are not sort by alphabet descending order (Swansea Mixture x 1 is in the second place)

STATUS: FAIL.

## TC.3.3.7 Sorting by Order Description (asc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Description attribute
* 6. Press Order Description attribute one more time

Expected result: Orders should sort by alphabet ascending order.

Actual result:

STATUS: PASS.

## TC.3.3.8 Sorting by Order Total (desc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Total attribute

Expected result: Orders should sort by number descending order.

Actual result:

STATUS: PASS.

## TC.3.3.8 Sorting by Order Total (asc order)
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Press Order Total attribute
* 6. Press Order Total attribute one more time

Expected result: Orders should sort by number ascending order.

Actual result:

STATUS: PASS.


## TC.3.4.1 Item Order Breakdown by February
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Hover on Item Order Breakdown February graph
* 6. Observe hover pop up and previous orders

Expected result: Hover pop up and previous orders of items ordered should match.

Actual result:

STATUS: PASS.

## TC.3.4.2 Item Order Breakdown by July
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Hover on Item Order Breakdown July graph
* 6. Observe hover pop up and previous orders

Expected result: Hover pop up and previous orders of items ordered should match.

Actual result:

STATUS: PASS.

## TC.3.4.3 Item Order Breakdown by December
* 1. Enter https://sweetshop.netlify.app/login
* 2. Type email adress: test@gmail.com
* 3. Type password: test
* 4. Press login button
* 5. Hover on Item Order Breakdown December graph
* 6. Observe hover pop up and previous orders

Expected result: Hover pop up and previous orders of items ordered should match.

Actual result:

STATUS: PASS.

## TC.3.5.1 Your basket functionality in Your Account page
* 1. Enter https://sweetshop.netlify.app/
* 2. Add to basket: Chocolate Cups, Bon Bons, Sherbert Straws, Sherbert Discs.
* 3. Enter https://sweetshop.netlify.app/login
* 4. Type email adress: test@gmail.com
* 5. Type password: test
* 6. Press login button
* 7. Observe your basket

Expected result: Added items should appear in Your Basket with correct values.

Actual result:

STATUS: PASS.

## TC.3.5.2 Your basket deleting in Your Account page
* 1. Enter https://sweetshop.netlify.app/
* 2. Add to basket: Chocolate Cups, Bon Bons, Sherbert Straws, Sherbert Discs.
* 3. Enter https://sweetshop.netlify.app/login
* 4. Type email adress: test@gmail.com
* 5. Type password: test
* 6. Press login button
* 7. Press Delete Item on: Chocolate Cups, Bon Bons, Sherbert Straws, Sherbert Discs
* 8. Observe your basket

Expected result: Basket should be empty.

Actual result:

STATUS: PASS.


# TS.4. Sweets page

## TC.4.1. Page has the header
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Observe page header

Expected result: Page has header: "Browse sweets"
Actual result:

STATUS: PASS.

## TC.4.2. Page has the description
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Observe page description

Expected result: Page has description: "Browse our delicious choice of retro sweets."
Actual result:

STATUS: PASS.

## TC.4.3. All list items have necessary HTML elements
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Observe list items

Expected result: All list items have images, headers, descriptions and prices
Actual result: "Wham Bars" doesn't have it's image

STATUS: FAIL.

## TC.4.4.1 Add to basket Wham Bars
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Press Add to basket: Wham Bars.
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open Sweets page
2. Adds item to basket
3. Basket count becomes "1"
4. Opens Basket page
5. Basket should contain:
Wham Bar £0.15
x 1
Total (GBP) £0.15

Actual result:

STATUS: PASS.


## TC.4.4.2 Add to basket two same items
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Press Add to basket: "Sherbert Straws" 2 times
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open Sweets page
2. Adds items to basket
3. Basket count becomes "2"
4. Opens Basket page
5. Basket contains: 
Sherbert Straws £0.75
x 2
Total (GBP) £1.50

Actual result:

STATUS: PASS.


## TC.4.4.3 Add to basket multiple items
* 1. Enter https://sweetshop.netlify.app/sweets
* 2. Press Add to basket: Sherbert Straws, Chocolate Cups, Sherbert Discs, Bon Bons.
* 3. Observe navigation bar's Basket count
* 4. Press "Basket" on navigation bar
* 5. Observe Your Basket information

Expected result: 
1. Open Sweets page
2. Adds items to basket
3. Basket count becomes "4"
4. Opens Basket page
5. Basket should contain all items with correct values (total: £3.70, every item x1)

Actual result:

STATUS: PASS.


# TS.5. About page

## TC.5.1. Page has the header
* 1. Enter https://sweetshop.netlify.app/about
* 2. Observe page header

Expected result: Page has header: "Sweet Shop Project"
Actual result:

STATUS: PASS.

## TC.5.2. Page has the description
* 1. Enter https://sweetshop.netlify.app/about
* 2. Observe page description

Expected result: Page has description: 
    "An intentionally broken web application to help demonstrate Chrome DevTools.
    Sweet Shop is a project created to help demonstrate some of the great features of the Chrome DevTools which may be of use to people who help test web applications. Sweet Shop encompasses common issues found in real-world web applications!"

Actual result:

STATUS: PASS.


## TC.5.3.1 Navigation 'Sweet Shop' functionality
* 1. Enter https://sweetshop.netlify.app/about
* 2. Press 'Sweet Shop' attribute in navigation bar
* 3. Observe page

Expected result: Main page opens
Actual result:

STATUS: PASS.

## TC.5.3.2 Navigation 'Sweets' functionality
* 1. Enter https://sweetshop.netlify.app/about
* 2. Press 'Sweets' attribute in navigation bar
* 3. Observe 'Sweets' page

Expected result: 'Sweets' page opens
Actual result:

STATUS: PASS.

## TC.5.3.3 Navigation 'Login' functionality
* 1. Enter https://sweetshop.netlify.app/about
* 2. Press 'Login' attribute in navigation bar
* 3. Observe 'Login' page

Expected result: 'Login' page opens
Actual result:

STATUS: PASS.

## TC.5.3.4 Navigation 'Basket' functionality
* 1. Enter https://sweetshop.netlify.app/about
* 2. Press 'Basket' attribute in navigation bar
* 3. Observe 'Basket' page

Expected result: 'Basket' page opens
Actual result:

STATUS: PASS.


# TS.6. Basket page


## TC.6.1 Page has the header
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page header

Expected result: Page has header: "Your Basket"
Actual result:

STATUS: PASS.

## TC.6.2. Page has the description
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page description

Expected result: Page has description: "Please check your order details and then enter your payment and delivery details."
Actual result:

STATUS: PASS.

## TC.6.3. Page has the Billing adress
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Billing adress section

Expected result: Page has Billing adress header with form below.
Actual result:

STATUS: PASS.


## TC.6.4. Page has the Payment
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Payment section

Expected result: Page has Payment header with form below.
Actual result:

STATUS: PASS.

## TC.6.5. Page has the Continue to checkout button
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe Continue to checkout button

Expected result: Page has the Continue to checkout button.
Actual result:

STATUS: PASS.

## TC.6.6.1 Page has the Your Basket information
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Your basket section

Expected result: Page has Your basket section with total amount.
Actual result:

STATUS: PASS.

## TC.6.6.2 Basket shows added items correctly
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Chocolate Cups, Bon Bons.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Observe your basket

Expected result: Your basket contains items added to basket with correct amounts and values.
Actual result:

STATUS: PASS.


## TC.6.6.3 Delete item from basket
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Chocolate Cups, Bon Bons.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Delete Item: Chocolate Cups.
* 5. Observe your basket

Expected result: Your basket contains: Strawberry Bon Bons £1.00 x 1, Total (GBP) £1.00
Actual result:

STATUS: PASS.


## TC.6.7.1 Page has the Delivery information
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Delivery section

Expected result: Page has Delivery section with selections: Collect (FREE), Standard Shipping (£1.99).
Actual result:

STATUS: PASS.

## TC.6.7.2 Choose Collect (FREE) with items in cart
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Chocolate Cups, Bon Bons.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Press Collect (FREE) selection
* 5. Observe your basket

Expected result: Your Basket total amount should be: £2.00
Actual result:

STATUS: PASS.

## TC.6.7.3 Choose Collect (FREE) without items in cart
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Press Collect (FREE) selection
* 3. Observe your basket

Expected result: Your Basket total amount should be: £1.99
Actual result:

STATUS: PASS.

## TC.6.7.4 Choose Standard Shipping (£1.99) with items in cart
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Chocolate Cups, Bon Bons.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Press Standard Shipping (£1.99) selection
* 5. Observe your basket

Expected result: Your Basket total amount should be: £3.99
Actual result: Your Basket total amount is: £21.99

STATUS: FAIL.

## TC.6.7.5 Choose Standard Shipping (£1.99) with different items in cart
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Press Standard Shipping (£1.99) selection
* 5. Observe your basket

Expected result: Your Basket total amount should be: £3,69
Actual result: Your Basket total amount is: £NaN.

STATUS: FAIL.

## TC.6.7.6 Choose Standard Shipping (£1.99) without items in cart
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Press Standard Shipping (£1.99) selection
* 3. Observe your basket

Expected result: Your Basket total amount should be: £1.99
Actual result:

STATUS: PASS.


## TC.6.8.1 Page has the Promo code
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Promo code input

Expected result: Page has Promo code input with Redeem button nearby.
Actual result:

STATUS: PASS.

## TC.6.8.2 Promo code empty
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Leaving empty promo code
* 5. Pressing Redeem button
* 5. Observe error message

Expected result: Page should throw error message: "Please enter correct Promo code".
Actual result: Page restarts, no error message shown.

STATUS: FAIL.

## TC.6.8.3 Promo code entering
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Typing in promo code input: test
* 5. Pressing Redeem button
* 5. Observe message

Expected result: Page should throw error message: "Please enter correct Promo code" or inform that promo code was accepted.
Actual result: Page restarts, no message shown.

STATUS: FAIL.

## TC.6.9.1 Page has the Empty Basket button
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Observe page Empty Basket button

Expected result: Page has Empty Basket button.
Actual result:

STATUS: PASS.

## TC.6.9.2 Empty basket button functionality
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Pressing Empty Basket button
* 5. Observe alert message
* 6. Press OK on alert message
* 5. Observe Your basket

Expected result: Your basket should become empty, total amount: £0.00.
Actual result:

STATUS: PASS.

## TC.6.9.3 Empty basket button with no items in basket
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Pressing Empty Basket button
* 3. Observe error message

Expected result: After pressing Empty Basket, page should throw error message, that there are no items in cart.
Actual result: No error message, nothing happens with page.

STATUS: FAIL.


## TC.6.10.1 Make an order with valid data
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Type valid data:
* Enter First name: Test
* Enter Last name: Test
* Enter Email: tester@gmail.com
* Enter Adress: Test str. 22-2
* Select Country: United Kingdom
* Select City: Bristol
* Select Zip: 123123
* Enter Name on card: Tester Tester
* Enter Credit card number: 123123123123123
* Enter Expiration: 08/28
* Enter CVV: 123
* 5. Press Collect (FREE) selection on Delivery options
* 6. Press Continue to checkout button

Expected result: Page should redirect you to successful order page.
Actual result: Page restarts, and nothing happens.

STATUS: FAIL.

## TC.6.10.2 Make an order with no data
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Leave all Billing adress and payment inputs empty.
* 5. Press Collect (FREE) selection on Delivery options
* 6. Press Continue to checkout button

Expected result: Page should throw you error messages on every input except Address 2 (Optional).
Actual result:

STATUS: PASS.

## TC.6.10.3 Make an order with invalid data
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Type valid data:
* Enter First name: 123123
* Enter Last name: 123123
* Enter Email: 123123
* Enter Adress: 123123
* Select Country: United Kingdom
* Select City: Bristol
* Select Zip: test
* Enter Name on card: 123123123123
* Enter Credit card number: test
* Enter Expiration: test
* Enter CVV: e
* 5. Press Collect (FREE) selection on Delivery options
* 6. Press Continue to checkout button

Expected result: First name, Last name, Adresss, Zip, Name on card, Credit card number, Expiration should throw error messages that data is invalid. Order is not possible to make.
Actual result: First name, Last name, Adresss, Zip, Name on card, Credit cart number, Expiration don't indicate that data is invalid. Only email and CVV indicates about wrong data. Order is not made.

STATUS: FAIL.

## TC.6.10.4 Make an order with different invalid data
* 1. Enter https://sweetshop.netlify.app/
* 2. Press Add to Basket: Sherbet Discs, Sherbert Straws.
* 3. Enter https://sweetshop.netlify.app/basket
* 4. Type valid data:
* Enter First name: 123123
* Enter Last name: 123123
* Enter Email: 123123
* Enter Adress: 123123@gmail.com
* Select Country: United Kingdom
* Select City: Bristol
* Select Zip: test
* Enter Name on card: 123123123123
* Enter Credit card number: test
* Enter Expiration: test
* Enter CVV: 123
* 5. Press Collect (FREE) selection on Delivery options
* 6. Press Continue to checkout button

Expected result: First name, Last name, Adresss, Zip, Name on card, Credit cart number, Expiration should throw error messages that data is invalid. Order should not be done.
Actual result: Page restarts, nothing happens, no error messages shown.

STATUS: FAIL.


## TC.6.11.1 Navigation functionality (sweet shop)
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Pressing Sweet Shop navigation attribute
* 3. Observe main page

Expected result: Show main page.
Actual result:

STATUS: PASS.

## TC.6.11.2 Navigation functionality (sweets)
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Pressing Sweets navigation attribute
* 3. Observe Sweets page

Expected result: Show Sweets page.
Actual result:

STATUS: PASS.

## TC.6.11.3 Navigation functionality (about)
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Pressing About navigation attribute
* 3. Observe About page

Expected result: Show About page.
Actual result: Page throws error: Page not found. Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.

STATUS: FAIL.

## TC.6.11.4 Navigation functionality (login)
* 1. Enter https://sweetshop.netlify.app/basket
* 2. Pressing Login navigation attribute
* 3. Observe Login page

Expected result: Show Login page.
Actual result:

STATUS: PASS.