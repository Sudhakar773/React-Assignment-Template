import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 mb-3">Welcome to Product Manager 🛠️</h1>
          <p className="lead mb-4">
            Manage your products efficiently and keep track of all users in one place.
          </p>
          <img
            src="https://images.unsplash.com/photo-1581091215368-7a12d18f2173?auto=format&fit=crop&w=800&q=80"
            alt="Product Management"
            className="img-fluid rounded shadow"
          />
        </div>
      </section>

      {/* Features / Cards Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row g-4">
            {/* Product Management Card */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1581091215368-7a12d18f2173?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Products"
                />
                <div className="card-body">
                  <h5 className="card-title">Product Management</h5>
                  <p className="card-text">
                    Add, edit, and remove products easily. Track product inventory, categories, and details in a user-friendly interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Users List Card */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1590608897129-79c1d8f46f56?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Users List"
                />
                <div className="card-body">
                  <h5 className="card-title">Users List</h5>
                  <p className="card-text">
                    View and manage all users in the system. Assign roles, view activity, and maintain a structured user base effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
