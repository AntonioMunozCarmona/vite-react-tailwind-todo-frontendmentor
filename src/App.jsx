import Crossicon from "./components/icons/Crossicon.jsx";
import Moonicon from "./components/icons/Moonicon.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
                        Todo
                    </h1>
                    ;
                    <button>
                        <Moonicon fill="#000" />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full border-none text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new Todo..."
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white">
                    <article className="flex gap-4 border-b-2 border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course in bluuweb
                        </p>
                        <button>
                            <Crossicon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b-2 border-b-gray-400 py-4  px-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course in bluuweb
                        </p>
                        <button>
                            <Crossicon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b-2 border-b-gray-400 py-4  px-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course in bluuweb
                        </p>
                        <button>
                            <Crossicon />
                        </button>
                    </article>
                    <section className="flex justify-between bg-white px-4 py-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <section className="text-center">drag and drop to reorder </section>
        </div>
    );
};

export default App;
