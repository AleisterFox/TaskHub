import React from "react";

function useLocalStorage(itemName, initialState) {
  const [items, setItems] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // React.useEffect((localStorageItems) => {
  //   try {
  //     JSON.parse(localStorageItems)
  //     setLoading(false);
  //   } catch(error) {
  //     setLoading(false);
  //     setError(error);
  //   }
  // },[]);

  React.useEffect (() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialState));
          parsedItem = initialState;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItems(parsedItem);
        }
  
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 2000);
  },[]);

  const updateItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return {
    items,
    updateItems,
    loading,
    error
  }

}

export { useLocalStorage };