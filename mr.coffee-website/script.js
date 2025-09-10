// Main JavaScript file for MR.COFFEE website

document.addEventListener("DOMContentLoaded", () => {
  // Initialize custom cursor
  initCustomCursor()

  // Initialize mobile menu
  initMobileMenu()

  // Initialize scroll effects
  initScrollEffects()

  // Initialize menu section
  initMenuSection()

  // Initialize rewards section
  initRewardsSection()

  // Initialize order section
  initOrderSection()

  // Initialize cart functionality
  initCart()

  // Set current year in footer
  const yearElements = document.querySelectorAll("#current-year")
  const currentYear = new Date().getFullYear()
  yearElements.forEach((element) => {
    element.textContent = currentYear
  })
})

// Custom Cursor
function initCustomCursor() {
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Cursor hover effect
  const hoverElements = document.querySelectorAll("a, button, .featured-card, .reward-card, .menu-item, .value-card")

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursorFollower.style.width = "50px"
      cursorFollower.style.height = "50px"
    })

    element.addEventListener("mouseleave", () => {
      cursor.style.width = "10px"
      cursor.style.height = "10px"
      cursorFollower.style.width = "40px"
      cursorFollower.style.height = "40px"
    })
  })

  // Hide cursor on mobile devices
  if (window.innerWidth <= 768) {
    cursor.style.display = "none"
    cursorFollower.style.display = "none"
  }
}

// Mobile Menu Functionality
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuClose = document.querySelector(".menu-close")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  // Open mobile menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  // Close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  }

  menuClose.addEventListener("click", closeMobileMenu)

  // Close mobile menu when clicking a nav link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })
}

// Scroll Effects
function initScrollEffects() {
  const header = document.querySelector(".header")
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section[id]")

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Update active nav link based on scroll position
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
}

// Menu Section Functionality
function initMenuSection() {
  // Menu data
  const menuItems = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Our signature blend with notes of chocolate and caramel.",
      price: 4.5,
      category: "espresso",
      image: "images/product-1.jpg",
      isNew: false,
      isDrink: true,
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Espresso with steamed milk and vanilla, topped with caramel.",
      price: 5.25,
      category: "espresso",
      image: "images/product-2.jpg",
      isNew: false,
      isDrink: true,
    },
    {
      id: 3,
      name: "Mocha Frappuccino",
      description: "Blended coffee with rich mocha sauce and whipped cream.",
      price: 5.75,
      category: "frappe",
      image: "images/product-3.jpg",
      isNew: true,
      isDrink: true,
    },
    {
      id: 4,
      name: "Vanilla Cold Brew",
      description: "Slow-steeped cold brew with a hint of vanilla sweetness.",
      price: 4.95,
      category: "espresso",
      image: "images/product-4.jpg",
      isNew: false,
      isDrink: true,
    },
    {
      id: 5,
      name: "Cinnamon Roll",
      description: "Freshly baked cinnamon roll with cream cheese frosting.",
      price: 3.95,
      category: "bakery",
      image: "images/product-5.jpg",
      isNew: false,
      isDrink: false,
    },
    {
      id: 6,
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with rich chocolate.",
      price: 3.5,
      category: "bakery",
      image: "images/product-6.jpg",
      isNew: false,
      isDrink: false,
    },
    {
      id: 7,
      name: "Strawberry Frappuccino",
      description: "Blended strawberry puree with ice and cream.",
      price: 5.5,
      category: "frappe",
      image: "images/product-7.jpg",
      isNew: true,
      isDrink: true,
    },
    {
      id: 8,
      name: "Avocado Toast",
      description: "Sourdough toast topped with avocado, sea salt, and red pepper flakes.",
      price: 6.95,
      category: "sandwiches",
      image: "images/product-8.jpg",
      isNew: false,
      isDrink: false,
    },
    {
      id: 9,
      name: "Turkey & Swiss Sandwich",
      description: "Roasted turkey with Swiss cheese, lettuce, and tomato on multigrain bread.",
      price: 7.95,
      category: "sandwiches",
      image: "images/product-9.jpg",
      isNew: false,
      isDrink: false,
    },
  ]

  // Get DOM elements
  const menuItemsContainer = document.getElementById("menu-items")
  const filterButtons = document.querySelectorAll(".filter-btn")

  // Initialize menu
  if (menuItemsContainer) {
    displayMenuItems("all")
  }

  // Add event listeners to filter buttons
  if (filterButtons) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Get category from data attribute
        const category = this.getAttribute("data-category")

        // Display menu items for selected category
        displayMenuItems(category)
      })
    })
  }

  // Function to display menu items
  function displayMenuItems(category) {
    if (!menuItemsContainer) return

    // Clear menu items container
    menuItemsContainer.innerHTML = ""

    // Filter menu items by category
    const filteredItems = category === "all" ? menuItems : menuItems.filter((item) => item.category === category)

    // Check if there are items to display
    if (filteredItems.length === 0) {
      menuItemsContainer.innerHTML = `
                <div class="no-items">
                    <p>No items found in this category. Please try another category.</p>
                </div>
            `
      return
    }

    // Create HTML for each menu item
    filteredItems.forEach((item, index) => {
      const menuItemHTML = `
                <div class="menu-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                        ${item.isNew ? '<div class="menu-item-badge">New</div>' : ""}
                    </div>
                    <div class="menu-item-details">
                        <div class="menu-item-header">
                            <h3>${item.name}</h3>
                            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="menu-item-description">${item.description}</p>
                        <a href="order.html" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            `

      // Append menu item to container
      menuItemsContainer.innerHTML += menuItemHTML
    })
  }
}

// Rewards Section Functionality
function initRewardsSection() {
  // Get DOM elements
  const rewardCards = document.querySelectorAll(".reward-card")
  const modal = document.getElementById("app-modal")
  const modalClose = document.querySelector(".modal-close")

  // Add event listeners to reward cards
  if (rewardCards) {
    rewardCards.forEach((card) => {
      card.addEventListener("click", () => {
        // Show modal
        if (modal) {
          modal.classList.add("active")
        }
      })
    })
  }

  // Close modal when clicking the close button
  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active")
    })
  }

  // Close modal when clicking outside the modal content
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active")
      }
    })
  }
}

// Cart Functionality
function initCart() {
  // Cart data
  let cart = JSON.parse(localStorage.getItem("mrCoffeeCart")) || []

  // DOM elements
  const cartIcon = document.getElementById("cart-icon")
  const cartModal = document.getElementById("cart-modal")
  const closeCart = document.querySelector(".close-cart")
  const cartItems = document.getElementById("cart-items")
  const cartEmpty = document.getElementById("cart-empty")
  const cartTotalPrice = document.getElementById("cart-total-price")
  const clearCartBtn = document.getElementById("clear-cart")
  const checkoutBtn = document.getElementById("checkout-btn")
  const cartCount = document.getElementById("cart-count")
  const cartSummaryList = document.getElementById("cart-summary-list")
  const cartSummaryTotal = document.getElementById("cart-summary-total")
  const cartSummary = document.getElementById("cart-summary")

  // Update cart count
  function updateCartCount() {
    if (cartCount) {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
      cartCount.textContent = totalItems

      // Show/hide cart summary in order page
      if (cartSummary) {
        if (totalItems > 0) {
          cartSummary.style.display = "block"
        } else {
          cartSummary.style.display = "none"
        }
      }
    }
  }

  // Update cart display
  function updateCartDisplay() {
    if (!cartItems || !cartEmpty || !cartTotalPrice) return

    if (cart.length === 0) {
      if (cartItems) cartItems.style.display = "none"
      if (cartEmpty) cartEmpty.style.display = "block"
      if (cartTotalPrice) cartTotalPrice.textContent = "$0.00"
    } else {
      if (cartItems) cartItems.style.display = "block"
      if (cartEmpty) cartEmpty.style.display = "none"

      // Clear cart items
      if (cartItems) cartItems.innerHTML = ""

      // Add each item to cart display
      let total = 0

      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity
        total += itemTotal

        if (cartItems) {
          const cartItemHTML = `
            <div class="cart-item" data-index="${index}">
              <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-options">
                  ${item.size ? `${item.size} × ` : ""}${item.quantity}
                  ${item.addons && item.addons.length > 0 ? " • " + item.addons.join(", ") : ""}
                </div>
              </div>
              <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
              <button class="cart-item-remove" data-index="${index}">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          `

          cartItems.innerHTML += cartItemHTML
        }
      })

      // Update total price
      if (cartTotalPrice) cartTotalPrice.textContent = `$${total.toFixed(2)}`

      // Add event listeners to remove buttons
      const removeButtons = document.querySelectorAll(".cart-item-remove")
      removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const index = Number.parseInt(this.getAttribute("data-index"))
          removeFromCart(index)
        })
      })
    }

    // Update cart summary in order page
    updateCartSummary()
  }

  // Update cart summary in order page
  function updateCartSummary() {
    if (!cartSummaryList || !cartSummaryTotal) return

    // Clear cart summary list
    cartSummaryList.innerHTML = ""

    // Add each item to cart summary
    let total = 0

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity
      total += itemTotal

      const cartSummaryItemHTML = `
        <li>
          <span class="cart-item-name">${item.name}${item.size ? ` (${item.size})` : ""}</span>
          <span class="cart-item-quantity">×${item.quantity}</span>
          <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
        </li>
      `

      cartSummaryList.innerHTML += cartSummaryItemHTML
    })

    // Update total price
    cartSummaryTotal.textContent = `$${total.toFixed(2)}`
  }

  // Add item to cart
  function addToCart(item) {
    // Check if item already exists in cart (same product, size, and addons)
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        JSON.stringify(cartItem.addons.sort()) === JSON.stringify(item.addons.sort()),
    )

    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      cart[existingItemIndex].quantity += item.quantity
    } else {
      // Add new item to cart
      cart.push(item)
    }

    // Save cart to localStorage
    localStorage.setItem("mrCoffeeCart", JSON.stringify(cart))

    // Update cart display
    updateCartCount()
    updateCartDisplay()
  }

  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1)

    // Save cart to localStorage
    localStorage.setItem("mrCoffeeCart", JSON.stringify(cart))

    // Update cart display
    updateCartCount()
    updateCartDisplay()
  }

  // Clear cart
  function clearCart() {
    cart = []

    // Save cart to localStorage
    localStorage.setItem("mrCoffeeCart", JSON.stringify(cart))

    // Update cart display
    updateCartCount()
    updateCartDisplay()
  }

  // Open cart modal
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      if (cartModal) {
        cartModal.classList.add("active")
        document.body.style.overflow = "hidden"
        updateCartDisplay()
      }
    })
  }

  // Close cart modal
  if (closeCart && cartModal) {
    closeCart.addEventListener("click", () => {
      cartModal.classList.remove("active")
      document.body.style.overflow = ""
    })

    // Close modal when clicking outside the modal content
    cartModal.addEventListener("click", (event) => {
      if (event.target === cartModal) {
        cartModal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Clear cart button
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart)
  }

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cartModal) {
        cartModal.classList.remove("active")
        document.body.style.overflow = ""
      }

      // Scroll to order form if on order page
      const orderSection = document.getElementById("order")
      if (orderSection) {
        window.scrollTo({
          top: orderSection.offsetTop - 80,
          behavior: "smooth",
        })
      } else {
        // Navigate to order page
        window.location.href = "order.html"
      }
    })
  }

  // Initialize cart display
  updateCartCount()
  updateCartDisplay()
}

// Order Section Functionality
function initOrderSection() {
  // Get DOM elements
  const orderForm = document.getElementById("order-form")
  const productSelect = document.getElementById("product")
  const sizeContainer = document.querySelector(".size-selector").closest(".form-group")
  const sizeRadios = document.querySelectorAll('input[name="size"]')
  const quantityInput = document.getElementById("quantity")
  const quantityMinus = document.querySelector(".quantity-btn.minus")
  const quantityPlus = document.querySelector(".quantity-btn.plus")
  const addons = document.querySelectorAll('input[name="addons"]')
  const summaryDetails = document.getElementById("summary-details")
  const emptySummary = document.getElementById("empty-summary")
  const summaryProductName = document.getElementById("summary-product-name")
  const summaryProductSize = document.getElementById("summary-product-size")
  const summaryImage = document.getElementById("summary-image")
  const addonsSummary = document.getElementById("addons-summary")
  const addonsList = document.getElementById("addons-list")
  const totalPrice = document.getElementById("total-price")
  const orderSuccess = document.getElementById("order-success")
  const orderFormContainer = document.getElementById("order-form-container")
  const placeAnotherOrderBtn = document.getElementById("place-another-order")

  // Product data with isDrink property
  const products = {
    espresso: { name: "Signature Espresso", price: 4.5, image: "images/product-1.jpg", isDrink: true },
    macchiato: { name: "Caramel Macchiato", price: 5.25, image: "images/product-2.jpg", isDrink: true },
    mocha: { name: "Mocha Frappuccino", price: 5.75, image: "images/product-3.jpg", isDrink: true },
    coldbrew: { name: "Vanilla Cold Brew", price: 4.95, image: "images/product-4.jpg", isDrink: true },
    cinnamon: { name: "Cinnamon Roll", price: 3.95, image: "images/product-5.jpg", isDrink: false },
    croissant: { name: "Chocolate Croissant", price: 3.5, image: "images/product-6.jpg", isDrink: false },
    strawberry: { name: "Strawberry Frappuccino", price: 5.5, image: "images/product-7.jpg", isDrink: true },
    avocado: { name: "Avocado Toast", price: 6.95, image: "images/product-8.jpg", isDrink: false },
    turkey: { name: "Turkey & Swiss Sandwich", price: 7.95, image: "images/product-9.jpg", isDrink: false },
  }

  // Update product select options to include all menu items
  if (productSelect) {
    // Clear existing options except the first one
    while (productSelect.options.length > 1) {
      productSelect.remove(1)
    }

    // Add all products to the select
    Object.keys(products).forEach((key) => {
      const product = products[key]
      const option = document.createElement("option")
      option.value = key
      option.textContent = `${product.name} - $${product.price.toFixed(2)}`
      productSelect.appendChild(option)
    })

    // Add event listener to show/hide size options based on product type
    productSelect.addEventListener("change", function () {
      const selectedProduct = this.value

      if (selectedProduct && products[selectedProduct]) {
        const product = products[selectedProduct]

        // Show/hide size options based on whether it's a drink
        if (sizeContainer) {
          if (product.isDrink) {
            sizeContainer.style.display = "block"
          } else {
            sizeContainer.style.display = "none"
          }
        }
      }

      updateOrderSummary()
    })
  }

  // Quantity buttons functionality
  if (quantityMinus && quantityPlus && quantityInput) {
    quantityMinus.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value)
      if (value > 1) {
        quantityInput.value = value - 1
        updateOrderSummary()
      }
    })

    quantityPlus.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value)
      if (value < 10) {
        quantityInput.value = value + 1
        updateOrderSummary()
      }
    })
  }

  // Initialize order summary
  if (productSelect && summaryDetails) {
    updateOrderSummary()
  }

  // Add event listeners
  if (sizeRadios) {
    sizeRadios.forEach((radio) => {
      radio.addEventListener("change", updateOrderSummary)
    })
  }

  if (quantityInput) {
    quantityInput.addEventListener("input", updateOrderSummary)
  }

  if (addons) {
    addons.forEach((addon) => {
      addon.addEventListener("change", updateOrderSummary)
    })
  }

  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Validate form
      if (validateForm()) {
        // Show loading state
        const submitBtn = document.getElementById("place-order-btn")
        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...'
          submitBtn.disabled = true
        }

        // Get product details for cart
        const selectedProduct = productSelect.value
        const product = products[selectedProduct]
        const selectedSize = document.querySelector('input[name="size"]:checked')?.value
        const quantity = Number.parseInt(quantityInput.value) || 1

        // Get selected addons
        const selectedAddons = []
        const addonElements = document.querySelectorAll('input[name="addons"]:checked')
        addonElements.forEach((addon) => {
          const addonName = addon.nextElementSibling.textContent.split("(")[0].trim()
          selectedAddons.push(addonName)
        })

        // Calculate price
        let price = product.price

        // Adjust price based on size (only for drinks)
        if (product.isDrink && selectedSize) {
          if (selectedSize === "large") {
            price += 1.0
          } else if (selectedSize === "small") {
            price -= 0.5
          }
        }

        // Add addon prices
        addonElements.forEach((addon) => {
          price += Number.parseFloat(addon.getAttribute("data-price") || 0)
        })

        // Create cart item
        const cartItem = {
          id: selectedProduct,
          name: product.name,
          size: product.isDrink ? selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1) : null,
          quantity: quantity,
          price: price,
          image: product.image,
          addons: selectedAddons,
        }

        // Add to cart
        const cart = JSON.parse(localStorage.getItem("mrCoffeeCart")) || []
        cart.push(cartItem)
        localStorage.setItem("mrCoffeeCart", JSON.stringify(cart))

        // Simulate API call
        setTimeout(() => {
          // Show success message
          if (orderFormContainer) orderFormContainer.style.display = "none"
          if (orderSuccess) orderSuccess.style.display = "block"

          // Reset form
          orderForm.reset()

          // Scroll to top of order section
          const orderSection = document.getElementById("order")
          if (orderSection) {
            window.scrollTo({
              top: orderSection.offsetTop - 80,
              behavior: "smooth",
            })
          }
        }, 1500)
      }
    })
  }

  if (placeAnotherOrderBtn) {
    placeAnotherOrderBtn.addEventListener("click", () => {
      if (orderSuccess) orderSuccess.style.display = "none"
      if (orderFormContainer) orderFormContainer.style.display = "block"

      // Reset form
      if (orderForm) orderForm.reset()

      // Update order summary
      updateOrderSummary()
    })
  }

  // Function to update order summary
  function updateOrderSummary() {
    if (!productSelect || !summaryDetails || !emptySummary) return

    const selectedProduct = productSelect.value
    const selectedSize = document.querySelector('input[name="size"]:checked')?.value || "medium"
    const quantity = Number.parseInt(quantityInput.value) || 1

    if (selectedProduct) {
      // Show summary details
      summaryDetails.style.display = "block"
      emptySummary.style.display = "none"

      // Update product details
      const product = products[selectedProduct]
      if (summaryProductName) summaryProductName.textContent = product.name

      // Show size only for drinks
      if (summaryProductSize) {
        if (product.isDrink) {
          summaryProductSize.textContent = `${selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)} × ${quantity}`
        } else {
          summaryProductSize.textContent = `Quantity: ${quantity}`
        }
      }

      if (summaryImage) summaryImage.src = product.image

      // Calculate base price
      let basePrice = product.price

      // Adjust price based on size (only for drinks)
      if (product.isDrink) {
        if (selectedSize === "large") {
          basePrice += 1.0
        } else if (selectedSize === "small") {
          basePrice -= 0.5
        }
      }

      // Calculate add-ons
      let addonsTotal = 0
      const selectedAddons = []

      addons.forEach((addon) => {
        if (addon.checked) {
          const addonPrice = Number.parseFloat(addon.getAttribute("data-price") || 0)
          addonsTotal += addonPrice

          const addonName = addon.nextElementSibling.textContent.split("(")[0].trim()
          selectedAddons.push({
            name: addonName,
            price: addonPrice,
          })
        }
      })

      // Update add-ons list
      if (selectedAddons.length > 0) {
        if (addonsSummary) addonsSummary.style.display = "block"
        if (addonsList) addonsList.innerHTML = ""

        selectedAddons.forEach((addon) => {
          const li = document.createElement("li")
          li.innerHTML = `<span>${addon.name}</span><span>$${addon.price.toFixed(2)}</span>`
          if (addonsList) addonsList.appendChild(li)
        })
      } else {
        if (addonsSummary) addonsSummary.style.display = "none"
      }

      // Calculate total price
      const total = (basePrice + addonsTotal) * quantity
      if (totalPrice) totalPrice.textContent = `$${total.toFixed(2)}`
    } else {
      // Hide summary details
      if (summaryDetails) summaryDetails.style.display = "none"
      if (emptySummary) emptySummary.style.display = "block"
    }
  }

  // Function to validate form
  function validateForm() {
    let isValid = true

    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message")
    errorMessages.forEach((message) => {
      message.textContent = ""
    })

    // Remove error class from inputs
    const formControls = document.querySelectorAll(".form-control")
    formControls.forEach((control) => {
      control.classList.remove("error")
    })

    // Validate name (letters and spaces only)
    const nameInput = document.getElementById("name")
    const nameValue = nameInput?.value.trim() || ""

    if (nameValue === "") {
      displayError("name", "Name is required")
      isValid = false
    } else if (!isValidName(nameValue)) {
      displayError("name", "Name should only contain letters and spaces")
      isValid = false
    }

    // Validate email (custom validation without regex)
    const emailInput = document.getElementById("email")
    const emailValue = emailInput?.value.trim() || ""

    if (emailValue === "") {
      displayError("email", "Email is required")
      isValid = false
    } else if (!isValidEmail(emailValue)) {
      displayError("email", "Please enter a valid email address")
      isValid = false
    }

    // Validate phone (required, numbers only)
    const phoneInput = document.getElementById("phone")
    const phoneValue = phoneInput?.value.trim() || ""

    if (phoneValue === "") {
      displayError("phone", "Phone number is required")
      isValid = false
    } else if (!isPhoneNumberValid(phoneValue)) {
      displayError("phone", "Phone number should only contain digits")
      isValid = false
    }

    // Validate address
    const addressInput = document.getElementById("address")
    const addressValue = addressInput?.value.trim() || ""

    if (addressValue === "") {
      displayError("address", "Address is required")
      isValid = false
    }

    // Remove validation for fields that don't exist in the current form
    // The zipcode and cardnumber validations are removed since they're not in the form

    // Validate product selection
    const productValue = productSelect?.value || ""

    if (productValue === "") {
      displayError("product", "Please select a product")
      isValid = false
    }

    // Validate quantity
    const quantityValue = Number.parseInt(quantityInput?.value || "0")

    if (isNaN(quantityValue) || quantityValue < 1) {
      displayError("quantity", "Quantity must be at least 1")
      isValid = false
    } else if (quantityValue > 10) {
      displayError("quantity", "Maximum quantity is 10")
      isValid = false
    }

    return isValid
  }

  // Function to display error message
  function displayError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`)
    const inputElement = document.getElementById(fieldId)

    if (errorElement) {
      errorElement.textContent = message
    }

    if (inputElement) {
      inputElement.classList.add("error")
    }
  }

  // Custom validation functions without regex
  function isValidName(name) {
    for (let i = 0; i < name.length; i++) {
      const char = name.charAt(i)
      if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z") && char !== " ") {
        return false
      }
    }
    return true
  }

  function isValidEmail(email) {
    // Check for @ symbol
    const atIndex = email.indexOf("@")
    if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
      return false
    }

    // Check for domain with at least one dot
    const domain = email.substring(atIndex + 1)
    const dotIndex = domain.indexOf(".")
    if (dotIndex === -1 || dotIndex === 0 || dotIndex === domain.length - 1) {
      return false
    }

    return true
  }

  // Improved phone number validation - only allows digits
  function isPhoneNumberValid(phone) {
    if (!phone) return false

    // Check if phone contains only digits
    for (let i = 0; i < phone.length; i++) {
      const charCode = phone.charCodeAt(i)
      if (charCode < 48 || charCode > 57) {
        return false
      }
    }

    return true
  }
}
