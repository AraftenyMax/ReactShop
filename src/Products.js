let Products = [
	{
		id: 0,
		sellerName: "Lenovo",
		name: "Lenovo laptop z710",
		description: "17.3” EVERYDAY ENTERTAINMENT LAPTOP.\
		The 17\" Lenovo Z710 laptop is a flexible entertainment\
		 hub powered by the 4th Generation Intel® Core™ processor.\
		  Great audio, crisp visuals, ample storage, and surprising\
		   affordability all combine to keep you smiling.",
		image: "https://www.lenovo.com/medias/\
		lenovo-laptop-ideapad-z710-main.png?context\
		=bWFzdGVyfHJvb3R8MTc0ODIzfGltYWdlL3BuZ3xoMmIva\
		GJkLzkzMTk4NzczNDUzMTAucG5nfDk3MWQxZTI5Y2E1ZjQ0Y\
		zMwMTE2ODE5YWVmMTk4MDE4ZjU4YmUwZWE4ZDIyY2ZhODY3NDhjNjMzMzAwYjE1MzY",
		price: "782",
		count: 3
	}, 
	{
		id: 10,
		sellerName: "Apple",
		name: "Iphone 7+",
		description: "\
	    Retina HD display\
	    5.5-inch (diagonal) widescreen LCD\
	    Multi-Touch display with IPS technology\
	    1920-by-1080-pixel resolution at 401 ppi\
	    1300:1 contrast ratio (typical)",
	    image: "https://images-na.ssl-images-amazon.com/images/I/51wxAG7KH0L.jpg",
	    price: "669",
	    count: 2
	}, 
	{
		id: 20,
		sellerName: "Samsung",
		name: "Samsung galaxy s10",
		description: "\
		Completely redesigned to remove interruptions.\
		No notch, no distractions. Precise laser cutting \
		and a Dynamic AMOLED screen that's easy on the eyes \
		make the Infinity Display our most innovative yet.",
		image: "https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._SX569_.jpg",
		price: "699",
		count: 5
	},
	{
		id: 228,
		sellerName: "LG",
		name: "LG g7 thinq",
		description: "\
		Shortcut to Great Shots\
		When you switch to LG, you can capture the \
		perfect shot with a camera so clever, it \
		knows exactly what you’re shooting – recognizing \
		up to 19 subject options.",
		image: "https://images-na.ssl-images-amazon.com/images/I/618T%2BXYuRpL._SX569_.jpg",
		price: "384",
		count: 2
	},
	{
		id: 278,
		sellerName: "Apple",
		name: "Macbook Pro 2018",
		description: "\
		2.4GHz Quad-Core Processor \
		with Turbo Boost up to 4.1GHz\
		256GB Storage\
		Touch Bar and Touch ID",
		image: "https://d2pa5gi5n2e1an.cloudfront.net/global/\
		images/product/laptops/Apple_MacBook_Pro_13inch_2018/\
		Apple_MacBook_Pro_13inch_2018_L_1.jpg",
		price: "1299",
		count: 4
	},
	{
		id: 2711,
		sellerName: "Google",
		name: "Google Pixel 2",
		description: "\
		he Google Pixel 2 clues us in on why Google called its \
		phone series Pixel: it was building the best camera on \
		a phone. This second-generation effort fulfills that \
		promise with not only the best-in-class photos, but \
		also dual front-facing speakers and water-resistance. \
		It's a great size, but you'll need to be okay with its \
		dated looks and the fact that there’s no headphone jack",
		image: "https://assets.pcmag.com/media/images/470228-google-pixel-2.jpg?width=1500&height=844",
		price: "649",
		count: 5
	}, 
	{
		id: 3621,
		sellerName: "Apple",
		name: "AirPods",
		description: "\
		More magical than ever.\
		Now with more talk time \
		and a new wireless charging \
		case, AirPods deliver an unparalleled \
		wireless headphone experience. Simply\
		 take them out and they’re ready to \
		 use with all your devices. Put \
		 them in your ears and they connect \
		 immediately, immersing you in rich, \
		 high-quality sound. Just like magic.",
		image: "https://images-na.ssl-images-amazon.com/images/I/41DYtv1JJaL._SX466_.jpg",
		price: "199",
		count: 4
	},
	{
		id: 27163,
		sellerName: "Dell",
		name: "Inspiron 15 laptop 7000",
		description: "\
		15\" laptop with narrow borders \
		and expansive onscreen views. \
		Featuring Dell Cinema and an FHD IPS panel, \
		the screen is stunning from every angle.",
		image: "https://cnet2.cbsistatic.com/img/GB_VQU4lnDFh_uhhlgHwt_-BAxM=\
		/868x488/2017/03/03/b7f67146-187f-4eb5-9428-d19088a57c35/dell-inspiron-15-7000-2017-05.jpg",
		price: "699",
		count: 3
	},
	{
		id: 2718,
		sellerName: "Asus",
		name: "Asus VivoBook s15",
		description: "\
		The ASUS VivoBook S15 gives you the perfect \
		combination of beauty and performance. With its \
		slim NanoEdge bezel, brushed-metal finish, the \
		latest Intel® Core™ i7 processor with 16GB RAM, \
		and NVIDIA® GeForce® 940MX graphics, VivoBook S15 \
		is designed for today’s fast-paced urban lifestyle.",
		image: "https://www.laptopmag.com/images/uploads/5551/g/lasus-vivobook-s15-s530u-006-lede.jpg",
		price: "649",
		count: 5
	},
	{
		id: 7326,
		sellerName: "DJI",
		name: "DJI - Mavic 2 Pro Quadcopter with Remote Controller",
		description: "\
		Take amazing aerial photos and videos with this \
		DJI Mavic 2 Pro aircraft. It has a powerful 1-inch CMOS sensor \
		to capture 20-megapixel 4K images and an adjustable-aperture lens \
		for clear footage in various lighting situations. This DJI Mavic 2 \
		Pro aircraft has 8GB of internal storage and supports microSD cards up to 128GB.",
		image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6262/6262620_sd.jpg",
		price: "1499",
		count: 2
	}, 
	{
		id: 6217,
		sellerName: "PISEN",
		name: "PISEN 20000mAh Portable Charger",
		description: "\
		Dual USB Output Power Bank with LED Display Type C \
		& Micro USB Inputs Battery Pack Compatible for iPhone,\
		 iPad, Samsung Galaxy and More (White)",
		image: "https://images-na.ssl-images-amazon.com/images/I/61XR6-Y%2BDuL._SL1200_.jpg",
		price: "34",
		count: 6
	}
];

export default Products;