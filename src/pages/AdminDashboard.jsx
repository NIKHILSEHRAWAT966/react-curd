


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled('button')`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);

const columns = [
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.firstname + " " + row.lastname,
        sortable: true,
    },
    {
        name: 'email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'password',
        selector: row => row.password,
        sortable: true,
    },
    {
        name: 'Address',
        selector: row => row.address,
        sortable: true,
    },
    {
        name: 'city',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'state',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'pincode',
        selector: row => row.pincode,
        sortable: true,
    },
];


const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = users.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const getAllUsers = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_USER_URL);
            const users = await res.data;
            setUsers(users);
            console.log("all users in backend", users);

        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        getAllUsers();
    }, [])


    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);




    return (
        <>
            <div className="w-[80%] mx-auto bg-slate-600 h-[80vh]">
                <DataTable
                    title="Users List"
                    columns={columns}
                    data={users}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                />
            </div>
        </>

    )

    // return (
    //     <div className="bg-slate-600 h-auto flex  justify-center" > {/* Background color here */}
    //         <div className=" mx-auto " >
    //             <DataTable
    //                 title="Users List"
    //                 columns={columns}
    //                 data={users}
    //                 pagination
    //                 paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
    //                 subHeader
    //                 subHeaderComponent={subHeaderComponentMemo}
    //                 persistTableHead
    //             />
    //         </div>
    //     </div>
    // );
}


export default AdminDashboard