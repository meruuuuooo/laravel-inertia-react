import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';

const columns = [
    'size',
    'chef',
    'status',
];

export default function All({auth, pizzas}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Pizzas</h2>}
        >
            <Head title="All Pizzas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            items={pizzas}
                            columns={columns}
                            primary="Order Number"
                            action="pizzas.edit"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
