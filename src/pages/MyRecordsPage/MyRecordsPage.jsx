export default function MyRecordsPage() {
    
    useEffect(function() {
        async function getProfile() {
          const profile = await profileAPI.getAll();
          categoriesRef.current = items.reduce((cats, item) => {
            const cat = item.category.name;
            return cats.includes(cat) ? cats : [...cats, cat]
          }, []);
          setActiveCat(categoriesRef.current[1]);
          setMenuItems(items);
        }
        getItems();
    
        // Load the user's cart (the unpaid order for that user)
        async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
        }
        getCart();
      }, []);

    return (
        <h1>This is my records page babe!</h1>
    )
}