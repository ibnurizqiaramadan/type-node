import { Request, Response } from 'express';

/**
 * Fetches data from the API.
 * @param {number} id - The ID of the data to fetch.
 * @returns {Promise<Response>} - The response from the API.
 */
const GetData = (id: number = 1) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    fetch(`https://dummyjson.com/products/${id}`).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
};

interface APIResponse {
  statusCode: number;
}

interface APIResponseData extends APIResponse {
  data: {
    message: string;
    data: any;
  }
}

/**
 * Handles the index request.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const index = async (req: Request, res: Response) => {
  const { id } = req.query;
  const datas: any = await GetData(Number(id ?? 1));
  const data = await datas.json();
  const response: APIResponseData  = {
    statusCode: 200,
    data: {
      message: 'success',
      data: data,
    },
  };
  res.send(response);
};

export default index;
