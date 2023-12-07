import React from "react";

const SerchBox = (props) => {
  const { value, isLoading, handleSubmit, onChange } = props;
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder="Search Recipes"
            className="form_control"
          />
          <input
            type="submit"
            disabled={isLoading || !value}
            className="btn"
            value="Search"
          />
        </form>
      </div>
    </>
  );
};

export default SerchBox;
