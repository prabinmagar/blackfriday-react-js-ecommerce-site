  export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD"
    }).format(price);
  }

  export const calculateDiscountedPrice = (price, discountPercent) => {
    return (price - (discountPercent/100) * price);
  }

  // fetch from local storage
  export const fetchFromLocalStorage = (itemName) => {
    let basket = localStorage.getItem(itemName);
    if(basket){
      return JSON.parse(localStorage.getItem(itemName));
    } else {
      return [];
    }
  }

  // store in local storage
  export const storeInLocalStorage = (data, itemName) => {
    localStorage.setItem(itemName, JSON.stringify(data));
  }

  export const displayActionMessage = (msg, status = 'info') => {
    const div = document.createElement('div');
    const span = document.createElement('span');
  
    div.className = `toast ${status === 'info'
      ? 'toast-info'
      : status === 'success'
        ? 'toast-success'
        : 'toast-error'
      // eslint-disable-next-line indent
      }`;
    span.className = 'toast-msg';
    span.textContent = msg;
    div.appendChild(span);
  
  
    if (document.querySelector('.toast')) {
      document.body.removeChild(document.querySelector('.toast'));
      document.body.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
  
    setTimeout(() => {
      try {
        document.body.removeChild(div);
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  };