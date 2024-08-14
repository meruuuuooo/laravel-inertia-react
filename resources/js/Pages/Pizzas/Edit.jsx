
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePizzaOrderForm from './Partials/UpdatePizzaOrderForm';
import { Head } from '@inertiajs/react';



export default function Edit({auth, pizza}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Order # {pizza.id}</h2>}
        >
            <Head title={'Order #' + pizza.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdatePizzaOrderForm
                            pizza={pizza}
                            className="p-6 text-gray-900 dark:text-gray-100"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
