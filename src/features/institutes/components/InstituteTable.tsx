
import { deleteInstitute } from '../instituteSlice';
import {Institute} from "../../../types/institute.ts";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";

interface Props {
    institutes: Institute[];
    onEdit: (institute: Institute) => void;
}

const InstituteTable: React.FC<Props> = ({ institutes, onEdit }) => {
    const dispatch = useAppDispatch();

    return (
        <table className="w-full table-auto border">
            <thead className="bg-gray-100">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {institutes.map((institute) => (
                <tr key={institute.id}>
                    <td>{institute.name}</td>
                    <td>{institute.email}</td>
                    <td>{institute.phone}</td>
                    <td>
                        <button onClick={() => onEdit(institute)} className="btn btn-sm">Edit</button>
                        <button onClick={() => dispatch(deleteInstitute(institute.id!))} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default InstituteTable;
