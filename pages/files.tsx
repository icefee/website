import { useState, useEffect, ReactNode } from 'react';
import { BasePage } from '../components/base';
import { List, Spin, message, Button, Upload, Popconfirm, Form, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as css from '../styles/Files.module.css';
import classNames from 'classnames';

interface File {
    name: string;
}

export default function Files(): JSX.Element {
    const render = ({ children }: { children?: ReactNode }): ReactNode => children;
    return (
        <BasePage title="文件列表" description="文件共享" render={render}>
            <AuthProvider>
                <FileList />
            </AuthProvider>
        </BasePage>
    )
}

function FileList(): JSX.Element {
    const [files, setFiles] = useState<Array<string>>([]);
    const [padding, setPadding] = useState<boolean>(false);
    const getFiles = async (): Promise<void> => {
        setPadding(true);
        const res = await fetch('/api/files').then((res: Response): Promise<{ status: number, files: string[] }> => res.json());
        if (res.status == 0) {
            setFiles(
                res.files
            )
        }
        else {
            message.error('加载错误!');
        }
        setPadding(false);
    }

    const handleChange = async ({ file }: { file: File }): Promise<void> => {
        const formData = new FormData();
        formData.append('name', file.name);
        formData.append('file', file as any);
        setPadding(true);
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        }).then(res => res.json());
        if (res.status === 0) {
            getFiles();
        }
        else {
            message.error(res.status)
        }
        setPadding(false);
    }

    const handleDelete = async (name: string): Promise<void> => {
        const res = await fetch('/api/delete', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'content-type': 'application/json'
            }
        }).then((res): Promise<{ status: number }> => res.json());
        if (res.status === 0) {
            getFiles();
        }
        else {
            message.error(res.status)
        }
    }

    useEffect(() => {
        getFiles();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <Spin spinning={padding}>
                <List
                    size="large"
                    header={
                        <div className={css.header}>
                            <span>文件列表</span>
                            <Upload beforeUpload={() => false} showUploadList={false} onChange={handleChange}>
                                <Button icon={<UploadOutlined />}>上传</Button>
                            </Upload>
                        </div>
                    }
                    bordered
                    dataSource={files}
                    renderItem={
                        (item: string) => (
                            <List.Item>
                                <a href={`/api/download?name=${item}`}>{item}</a>
                                <Popconfirm
                                    title="删除这个文件?"
                                    onConfirm={() => handleDelete(item)}
                                    placement="left"
                                    okText="确定"
                                    cancelText="取消"
                                >
                                    <a style={{ color: '#f00', fontSize: 14 }}>删除</a>
                                </Popconfirm>
                            </List.Item>
                        )
                    }
                />
            </Spin>
        </div>
    )
}

function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
    const [auth, setAuth] = useState(false);

    const handleSubmit = ({ password }: { password: string }) => {
        if (password === '111111') {
            setAuth(true);
        }
        else {
            message.error('密码不正确, 请重新输入!')
        }
    }

    if (auth) {
        return children;
    }
    return (
        <div className={classNames(css.authProvider, css.flexCenter)}>
            <Form onFinish={handleSubmit} layout="vertical">
                <Form.Item name="password" label="验证密码" rules={
                    [{ required: true, message: '请输入密码' }]
                }>
                    <Input.Password placeholder="输入密码" autoComplete="off" />
                </Form.Item>
            </Form>
        </div>
    )
}
