import { useState } from 'react';
import profile from '../../data/profile';
import './ProfileImage.css';

export default function ProfileImage({
  src = profile.image.src,
  alt = profile.image.alt,
}) {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div className="person person-fallback" aria-label={alt}>
      {/* Simple silhouette fallback */}
      <svg viewBox="0 0 200 400" fill="currentColor" stroke="none">
        <circle cx="100" cy="80" r="50" />
        <ellipse cx="100" cy="280" rx="80" ry="120" />
      </svg>
    </div>
  ) : (
    <img
      className="person"
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
