import { useGetProductField } from "@/api/useGetProductField";
import { Label } from "@/components/ui/label";
import { FilterTypes } from "@/types/filters";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "@radix-ui/react-radio-group";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
}



const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, isLoading }: FilterTypes = useGetProductField();
    return (
        <div className="my-5">
            <p className="mb-3 font-bold">
                Origin
            </p>
            {isLoading && result != null && (
                <p>Loading Origin...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)} className="flex flex-col space-y-2" >
                {result != null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div
                        key={origin}
                        className="flex items-center space-x-2"
                    >
                        <RadioGroupItem value={origin} id={origin} className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                            <RadioGroupIndicator className="w-2 h-2 rounded-full bg-primary" />
                        </RadioGroupItem>

                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;