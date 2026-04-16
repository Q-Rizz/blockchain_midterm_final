import React, { useState } from "react";
import type { TxState } from "../types";

interface Props {
  onSubmit: (imageUrl: string, caption: string) => Promise<void>;
  txState: TxState;
}

export const CreatePostForm: React.FC<Props> = ({ onSubmit, txState }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const isPending = txState.status === "pending";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl.trim() || !caption.trim()) return;
    await onSubmit(imageUrl.trim(), caption.trim());
    setImageUrl("");
    setCaption("");
  };

  return (
    <section className="create-post-section">
      <div className="compose-card">
        <div className="compose-header">
          <span className="compose-icon">✦</span>
          <h2>Share a Moment</h2>
        </div>
        <form className="create-post-form" onSubmit={handleSubmit}>
          <input type="url" placeholder="Paste an image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} disabled={isPending} required aria-label="Image URL" />
          <input type="text" placeholder="Add a caption..." value={caption} onChange={(e) => setCaption(e.target.value)} disabled={isPending} required aria-label="Caption" />
          <button type="submit" className="btn btn-primary" disabled={isPending || !imageUrl.trim() || !caption.trim()}>
            {isPending ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </section>
  );
};