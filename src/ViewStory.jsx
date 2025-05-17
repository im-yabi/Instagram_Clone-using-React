import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ViewStory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const numericId = Number(id);
    const total = Number(tot);

    // ✅ Validate the ID range before fetching
    if (numericId > total || numericId <= 0) {
      navigate('/');
      return;
    }

    fetch(`http://localhost:3000/Story/${numericId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Story not found');
        return res.json();
      })
      .then((data) => setStory(data))
      .catch((err) => {
        console.error(err);
        navigate('/');
      });
  }, [id, tot, navigate]);

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center gap-4">
          {Number(id) > 1 && (
            <Link to={`/Story/${Number(id) - 1}/${tot}`}>
              <i className="bi bi-arrow-left-circle-fill fs-2"></i>
            </Link>
          )}

          <img className="vh-100" src={story.image} alt="Story" />

          {Number(id) < Number(tot) && (
            <Link to={`/Story/${Number(id) + 1}/${tot}`}>
              <i className="bi bi-arrow-right-circle-fill fs-2"></i>
            </Link>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ViewStory;
