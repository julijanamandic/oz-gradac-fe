import { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { toast } from 'react-toastify';

const Post = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [workTime, setWorkTime] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !category || !workTime || !location || !price || !status || !tags || !description) {
            toast.error("Sva polja su obavezna");
            return;
        }

        const data = {
            title : title,
            category: category,
            workTime: workTime,
            status: status,
            location: location,
            price: price,
            tags: tags,
            description: description
        }

        console.log(data);
        createPost(data);

    }

    const createPost = async (data) => {

        const res = await fetch('http://localhost:8080/api/posts/',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
        if (!res.ok) {
          toast.error("Ops! Doslo je do neke greske!")
        } else {
          const data = await res.json();
          toast.success("Uspesno ste kreirali post!");
        }
      }

    return (
        <Layout header={3} footer={4}>
            <PageBanner pageName={"Kreiraj Post"} />
            <section className="checkout-area pt-130 rpt-95 pb-100 rpb-70">
                <div className="container">
                    <h3 className="from-title mb-25">Kreiraj post</h3>
                    <hr />
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="row mt-25">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="form-control"
                                        placeholder="Naslov"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        className="form-control"
                                        placeholder="Kategorija"
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="status"
                                        name="status"
                                        className="form-control"
                                        placeholder="Status"
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="work-time"
                                        name="work-time"
                                        className="form-control"
                                        placeholder="Radno vreme"
                                        onChange={(e) => setWorkTime(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="price"
                                        name="price"
                                        className="form-control"
                                        placeholder="Cena"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        className="form-control"
                                        placeholder="Lokacija"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        className="form-control"
                                        placeholder="Tagovi"
                                        onChange={(e) => setTags(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea
                                        name="description"
                                        id="description"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Opis posla"
                                        required=""
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" disabled={isLoading} className="theme-btn style-four">
                                        posaljite prijavu <i className="fas fa-arrow-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};
export default Post;