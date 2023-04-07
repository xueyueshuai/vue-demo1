<?php

namespace app\api\controller;

use think\Controller;


function msg($code, $msg = 'success', $data = [])
{

    header('Xzd-Code: ' . $code);
    header('Xzd-Msg: ' . rawurlencode($msg));
    header("Access-Control-Expose-Headers: Xzd-Code,Xzd-Msg");

    $code = (int)$code;
    $msg = (string)$msg;
    $data = (object)$data;
    // return json_encode(['code' => $code, 'msg' => $msg, 'data' => $data], JSON_UNESCAPED_UNICODE);
    return json(['code' => $code, 'msg' => $msg, 'data' => $data]);
}

class Test extends Controller
{
    
    public function __construct(){
        parent::__construct();
        header('Access-Control-Allow-Origin: *');
        // header("Content-type:text/html;charset=utf-8");
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
        header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
        // header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin'); // 设置允许自定义请求头的字段
        header('Access-Control-Allow-Headers: *'); // 设置允许自定义请求头的字段
    }
    // http://chat/xinzhidi.cn/api/test/test14
    public function  test14(){
        
        
        $data = [];
        $data['input'] = input();
        $data['header'] = request()->header();
        
        $data['model'] = input('model');
        $data['content'] = input('messages/a')[0]['content'];
        $data['authorization'] = request()->header('authorization');

        
        
        return msg(200, 'ok', $data);
    }
    
        // /api/test/ask
    public function  ask(){
        
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json; charset=utf-8');
        // header("Content-type:text/html;charset=utf-8");
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
        header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
        header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');
        
        // exit('aaa');
        $model = input('model');
        $content = input('messages/a')[0]['content'];
        $authorization = request()->header('authorization');
        
        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://api.openai.com/v1/chat/completions',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'POST',
          CURLOPT_POSTFIELDS =>'{
            "model": "'.$model.'",
            "messages": [{"role": "user", "content": "'.$content.'"}]
          }',
          CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'Authorization: '.$authorization
          ),
        ));
        
        $response = curl_exec($curl);
        
        curl_close($curl);
        
        // echo $response;
        
        $res = json_decode($response, true);
        
        
        $data = [];
        $data['res'] = $res;
        return msg(200, 'ok', $data);
    }
    
}