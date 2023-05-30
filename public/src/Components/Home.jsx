import { Button, SIZE } from "baseui/button";
import { ReactComponent as MachineLearning } from '../Assets/data_reports.svg';
import { ReactComponent as DataAnalytics } from '../Assets/predictive_analytics.svg';
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Despoina App
      </h1>
      <div className="flex items-center justify-center mb-8">
        <MachineLearning width={300} height={300}/>
        <DataAnalytics width={300} height={300}/>
      </div>
      <p className="text-lg mb-6">
        Harness the power of machine learning to unlock valuable insights and
        make accurate predictions.
      </p>
      <p className="text-lg mb-6">
        Our platform provides an intuitive interface for exploring, training,
        and deploying machine learning models. Whether you're a beginner or an
        experienced data scientist, you can leverage our tools to build and
        deploy models that tackle a wide range of problems.
      </p>
      <p className="text-lg mb-6">
        With a comprehensive set of algorithms, data preprocessing capabilities,
        and evaluation metrics, our platform empowers you to create robust
        models and iterate on them to achieve optimal performance.
      </p>
      <p className="text-lg mb-6">
        Get started today and revolutionize your decision-making with the power
        of machine learning.
      </p>
      <div className="mt-8">
        <Link to="/login">
          <Button size={SIZE.compact}>Login</Button>
        </Link>
        <span className="mx-2 text-lg text-gray-500">or</span>
        <Link to="/signup" >
        <Button size={SIZE.compact}>
        SignUp
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
