import React from 'react';
import { Button } from './Button';
import type { ButtonProps } from './Button';
import { ComponentMeta, Story } from '@storybook/react';
import { Stack } from '../../layouts/Stack';

export default {
  title: 'Element/Button',
  component: Button,
  args: {
    loading: false,
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>This is button</Button>
);
export const Cotained = () => {
  return (
    <div>
      <section>
        <h1>Contained Button</h1>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Primary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="contained" size="small">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="contained">회원가입</Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="contained" size="large">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="contained" fullWidth>
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Secondary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="contained" size="small" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="contained" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="contained" size="large" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="contained" fullWidth color="secondary">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Error</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="contained" size="small" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="contained" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="contained" size="large" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="contained" fullWidth color="error">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
      </section>
    </div>
  );
};

export const Text = () => {
  return (
    <div>
      <section>
        <h1>Contained Button</h1>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Primary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="text" size="small">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="text">회원가입</Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="text" size="large">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="text" fullWidth>
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Secondary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="text" size="small" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="text" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="text" size="large" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="text" fullWidth color="secondary">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Error</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="text" size="small" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="text" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="text" size="large" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="text" fullWidth color="error">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
      </section>
    </div>
  );
};

export const Outlined = () => {
  return (
    <div>
      <section>
        <h1>Contained Button</h1>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Primary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="outlined" size="small">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="outlined">회원가입</Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="outlined" size="large">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="outlined" fullWidth>
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Secondary</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="outlined" size="small" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="outlined" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="outlined" size="large" color="secondary">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="outlined" fullWidth color="secondary">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Error</h2>
          <Stack gutter={3}>
            <div>
              <h3 style={{ margin: 0 }}>Small</h3>
              <Button variant="outlined" size="small" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Medium</h3>
              <Button variant="outlined" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Large</h3>
              <Button variant="outlined" size="large" color="error">
                회원가입
              </Button>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Full Width</h3>
              <Button variant="outlined" fullWidth color="error">
                회원가입
              </Button>
            </div>
          </Stack>
        </div>
      </section>
    </div>
  );
};

export const Loading = () => {
  return (
    <div>
      <h1>Loading Button</h1>
      <Stack gutter={4}>
        <div>
          <Button loading />
        </div>
        <div>
          <Button loading color="secondary" />
        </div>
        <div>
          <Button loading color="error" />
        </div>
      </Stack>
    </div>
  );
};
