# Friend Finder App

###### Created By Alex Bruner 7-06-2018
This is an app designed to help you find friends by answering 10 simple questions.  Please answer truthfully and honestly.  You may be surprised by the results...


## How to Run This App
#### Starting the Server
- Clone this file to you computer by typing ***git@github.com:SunshineDaydeam/FriendFinder.git*** into your terminal.
- Run **NPM Init -Y** and  **NPM INSTALL**.
- To start the server, run **node server**.
	
#### Keep Shopping

- They are then prompted to choose another item and quantity.
- They are then brought back to choose between continuing to shop, checking out, or quitting.

	![IMG](/images/customer3.png)
	
#### Checkout

- They are shown their receipt which includes subtotal prices, sales tax, and grand total price.
- The quantity of those items they chose are removed from the SQL database.

	![IMG](/images/receipt.png)
	
#### Quit
- This lets the user close the app and not purchase the items.

## Manager Mode

#### View Products
- Displays All Products, including quantity and cost

	![IMG](/images/managerviewinv.png)

#### View Low Inventory
- Displays All Products where inventory is less than 50 units

	![IMG](/images/managerviewlow.png)

#### Adjust Quantity
- Allows user to manually reset a products quantity count in the database


	![IMG](/images/manageradjustqty.png)

#### Add Product
- Allows User to manually add a new product to the database

	![IMG](/images/manageraddproduct.png)

#### Quit
- Pretty self-explanatory.  Logs you out and closes the application.

	![IMG](/images/managerquit.png)


### Questions?
