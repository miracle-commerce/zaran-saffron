/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

// Script for weight pack selector
const ProductWeightPackSelector = document.querySelector("#product__weightPackSelector");

if(ProductWeightPackSelector){
    ProductWeightPackSelector.addEventListener('click', (e)=>{
        ProductWeightPackSelector.classList.toggle("active");
    })
}

// Script for ProductTabs
const ProductTabs = document.querySelector("[data-product-tabs]");
const ProductTabTitles = ProductTabs.querySelectorAll("[data-product-tab-title]");
ProductTabTitles.forEach((tabTitle)=>{
    tabTitle.addEventListener('click', (e)=>{
        if(!tabTitle.classList.contains('active')){
            let oldActiveTabTitle = ProductTabs.querySelector(".active[data-product-tab-title]");
            // Deactive old actived TabTitle
            oldActiveTabTitle.classList.remove("active");
            // Deactive old active tabcontent
            let oldTarget = oldActiveTabTitle.dataset.tabTarget;
            let oldTargetContentEl = ProductTabs.querySelector(`[data-tab-for='${oldTarget}']`);
            if(oldTargetContentEl && oldTargetContentEl.classList.contains('active')){
                oldTargetContentEl.classList.remove('active');
            }
            //active new tabtitle
            tabTitle.classList.add("active");
            // Active new TabContent
            let newTarget = tabTitle.dataset.tabTarget;
            let newTargetEl = ProductTabs.querySelector(`[data-tab-for='${newTarget}']`);
            if(newTargetEl){
                newTargetEl.classList.add("active");
            }
        }
    })
})

const Faqs = document.querySelectorAll("[data-faqs]");
Faqs.forEach((faq)=>{
    let faqItems = faq.querySelectorAll("[data-faq-item]");
    faqItems.forEach((faqItem)=>{
        let faqItemTitle = faqItem.querySelector("[data-faq-title]");
        faqItemTitle.addEventListener('click', (e)=>{
            faqItem.classList.toggle('active');
        })
    })
})

// Styles for ProductTabColumns 
const ProductTabColumnItems = document.querySelectorAll(".ProductTabColumnItem");
ProductTabColumnItems.forEach((ProductTabColumnItem)=>{
    let columnTitle = ProductTabColumnItem.querySelector(".ProductTabColumnItem__Title");
    columnTitle.addEventListener('click', (e)=>{
        ProductTabColumnItem.classList.toggle("active");
    })
})