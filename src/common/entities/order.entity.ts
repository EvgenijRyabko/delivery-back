export interface OrderEntity {
  id: number;
  url: string;
  price: number;
  count: number;
  status: string;
  user_id: number;
  worker_id: number;
}
