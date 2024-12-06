import React, { useRef } from "react";
const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  const debouncedFunction = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
};
const TopFilter = ({ show, setShow, setFilters, filters, categories }) => {
  const debouncedSetSearchValue = useDebounce((e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }));
  }, 300); // Adjust the debounce delay as needed

  const setSearchValue = (e) => {
    debouncedSetSearchValue(e);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <button className="filter-btn-shop" onClick={() => setShow(!show)}>
            {show ? (
              <i class="bx bxs-category text-dark"></i>
            ) : (
              <i class="bx bx-category text-white"></i>
            )}
          </button>
        </div>
        <div className="col-sm-8">
          <div className="pro-search-bx">
            <div className="input-group">
              <div className="input-group-prepend">
                <select
                  className="form-select"
                  id="categorySelect"
                  value={filters.category_id}
                  onChange={(e) =>
                    setFilters({ ...filters, category_id: e.target.value })
                  }
                >
                  <option selected>Category</option>
                  {categories.categories.map((cat, i) => (
                    <option key={i} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={filters.search}
                onChange={(e) => setSearchValue(e)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="filter-rightshop">
            <select
              class="form-select"
              onChange={(e) =>
                setFilters({ ...filters, filter: e.target.value })
              }
            >
              <option selected>Filters</option>
              <option value={1}>Price high to low</option>
              <option value={2}>Price low to high</option>
              <option value={3}>Best Selling</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFilter;
