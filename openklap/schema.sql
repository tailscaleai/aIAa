CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    youtube_url TEXT,
    duration INTEGER,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clips (
    id TEXT PRIMARY KEY,
    video_id TEXT,
    start_time INTEGER,
    end_time INTEGER,
    transcript TEXT,
    virality_score INTEGER,
    status TEXT DEFAULT 'pending',
    r2_key TEXT,
    FOREIGN KEY(video_id) REFERENCES videos(id)
);