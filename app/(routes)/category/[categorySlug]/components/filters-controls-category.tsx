import FilterOrigin from "./filter-origin";

type FiltersCategoryProps = {
    setFilterOrigin: (origin: string) => void;
}


const FiltersControlsCategory = (props: FiltersCategoryProps) => {
    const { setFilterOrigin } = props;
    return (
        <div className="sm:w-[350px] sm:mt-5">
            <FilterOrigin setFilterOrigin={setFilterOrigin} />
        </div>
    );
}

export default FiltersControlsCategory;