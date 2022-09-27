import React, { useState, useRef } from "react";
import "./Upload.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo, uploadContent } from "../../actions/UploadActions";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.videoReducer.uploading);
  const [video, setVideo] = useState(null);
  const descRef = useRef();
  const videoRef = useRef();
  const titleRef = useRef();
  const durationRef = useRef();
  const navigate = useNavigate();

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      console.log(vid);
      setVideo(vid);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const newVideo = {
      author: user._id,
      title: titleRef.current.value,
      duration: durationRef.current.value,
      description: descRef.current.value,
    };

    if (video) {
      const data = new FormData();
      const fileName = Date.now() + video.name;
      data.append("name", fileName);
      data.append("file", video);
      // const data = {
      //   name: fileName,
      //   file: video,
      // };

      // console.log(data.name);

      newVideo.filepath = fileName;

      // console.log(newVideo);

      try {
        dispatch(uploadVideo(data, navigate));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadContent(newVideo));
    resetShare();
  };

  //Reset Post Share

  const resetShare = () => {
    setVideo(null);
    descRef.current.value = "";
    titleRef.current.value = "";
    durationRef.current.value = "";
  };

  return (
    <div className="container-fluid tm-mt-60">
      <div className="row tm-mb-50 justify-content-center">
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5">Upload Video Here</h2>
          <form
            id="contact-form"
            class="tm-contact-form mx-auto"
            onSubmit={handleUpload}
          >
            <div className="form-group">
              <input
                type="file"
                name="filename"
                class="form-control rounded-0"
                placeholder="Video Here"
                // value={video}
                ref={videoRef}
                onChange={onVideoChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="title"
                class="form-control rounded-0"
                placeholder="Video title"
                // value={data.title}
                ref={titleRef}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="duration"
                class="form-control rounded-0"
                placeholder="Video Duration"
                ref={durationRef}
                // value={data.duration}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="description"
                class="form-control rounded-0"
                placeholder="Video Decription"
                // value={data.description}
                ref={descRef}
                // onChange={handleChange}
                required
              />
            </div>

            {/* <div className="form-group">
              <select
                className="form-control"
                id="contact-select"
                name="inquiry"
              >
                <option value="-">Subject</option>
                <option value="sales">Sales &amp; Marketing</option>
                <option value="creative">Creative Design</option>
                <option value="uiux">UI / UX</option>
              </select>
            </div> */}
            {/* <div class="form-group">
              <textarea
                rows="8"
                name="message"
                className="form-control rounded-0"
                placeholder="Message"
                required
              ></textarea>
            </div> */}

            <div className="form-group tm-text-right">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
