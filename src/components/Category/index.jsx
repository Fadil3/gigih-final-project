// eslint-disable-next-line react/prop-types
const Category = ({ title, isActive }) => {
  const base = `rounded-2xl border px-4 py-[10px] text-sm font-bold`;
  const normal = `border-neutral-500  text-white`;
  const active = `border-green-600 bg-green-600 bg-opacity-[0.18] text-green-600`;
  return (
    <>
      <button className={`${base} ${isActive ? normal : active}`}>
        {title}
      </button>
    </>
  );
};

export default Category;
