import { useState, useEffect, useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { useContext } from "react";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../store/slices/FilterSlice";
import { list } from "../components/Sort";
import plantData from "../data/data.json";
const Home = () => {
  const navigate = useNavigate();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortTypeProp);
  const dispatch = useDispatch();
  const isSearched = useRef(false);
  const isMounted = useRef(false);

  const [dataShop, setDataShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useContext(SearchContext);

  const fetchData = () => {
    setIsLoading(true);
    try {
      let filteredData = plantData;

      // Apply category filter
      if (categoryId > 0) {
        filteredData = filteredData.filter(
          (item) => item.category === categoryId
        );
      }

      // Apply search filter
      if (search) {
        filteredData = filteredData.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply sorting
      if (sortType === "price") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (sortType === "rating") {
        filteredData.sort((a, b) => b.rating - a.rating);
      }

      setDataShop(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortTypeProp === params.sortTypeProp);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearched.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearched.current) {
      fetchData();
    }
    isSearched.current = false;

    // eslint-disable-next-line
  }, [categoryId, sortType, search]);

  useEffect(() => {
    if (isMounted.current) {
      const queryStr = qs.stringify({
        sortTypeProp: sortType,
        categoryId,
      });
      navigate(`?${queryStr}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, search, navigate]);

  return (
    <>
      <div className="category-wrapper">
        <Categories
          activeCategory={categoryId}
          handleSetCategory={(i) => dispatch(setCategoryId(i))}
        />
        <Sort />
      </div>
      <CardList data={dataShop} isLoading={isLoading} />
    </>
  );
};

export default Home;
