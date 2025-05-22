import { useState, useEffect } from 'react';
import { createInstitute, updateInstitute } from '../instituteSlice';
import {Institute} from "../../../types/institute.ts";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";

interface Props {
    initialData?: Institute;
    onSuccess: () => void;
}

const InstituteForm: React.FC<Props> = ({ initialData, onSuccess }) => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<Institute>({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (initialData) setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.id) {
            await dispatch(updateInstitute(formData));
        } else {
            await dispatch(createInstitute(formData));
        }
        onSuccess();
        setFormData({ name: '', email: '', phone: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-4 rounded-xl">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="input" />
            <button type="submit" className="btn btn-primary">{formData.id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default InstituteForm;
