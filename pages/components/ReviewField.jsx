import { useState } from "react";

export default function ReviewField() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    //Extract values
    const name = formData.get("name");
    const message = formData.get("message");

    //Validation
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!message.trim()) {
      setError("Message is required.");
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setShowModal(true);
        setError(null);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setError(
        "There was a problem with the form submission. Please try again."
      );
    }
  };

  return (
    <div className="mt-12">
      <h1 className="text-2xl">Leave a review</h1>
      <form
        name="review"
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
        className="mt-6"
      >
        <input type="hidden" name="form-name" value="review" />
        <label
          htmlFor="name"
          className="block text-md font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <label
          htmlFor="comment"
          className="block text-md font-medium leading-6 text-gray-900 mt-10"
        >
          How did you find our service?
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="message"
            id="message"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send message
          </button>
        </div>
      </form>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-xl">
            <h3 className="text-2xl mb-4">Review submitted successfully.</h3>
            <button
              className="mt-6 rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-xl">
            <h3 className="text-2xl mb-4">An Error Occured</h3>
            <p>{error}</p>
            <button
              className="mt-6 rounded-md bg-blue-400 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={() => setError(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
