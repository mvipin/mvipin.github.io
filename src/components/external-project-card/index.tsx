import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { MdOpenInNew } from 'react-icons/md';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <div className="h-full">
                      <h2 className="mb-3">
                        {skeleton({
                          widthCls: 'w-32',
                          heightCls: 'h-6',
                          className: 'mb-2 mx-auto md:mx-0',
                        })}
                      </h2>
                      <div className="flex flex-col md:block">
                        <div className="avatar mx-auto md:mx-0 md:float-left md:mr-4 mb-3 md:mb-0">
                          <div className="w-32 h-32 mask mask-squircle">
                            {skeleton({
                              widthCls: 'w-full',
                              heightCls: 'h-full',
                              shape: '',
                            })}
                          </div>
                        </div>
                        <div className="space-y-2">
                          {skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-4',
                          })}
                          {skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-4',
                          })}
                          {skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-4',
                          })}
                          {skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-4',
                          })}
                          {skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-4',
                          })}
                          {skeleton({
                            widthCls: 'w-3/4',
                            heightCls: 'h-4',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="card shadow-md card-sm bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click External Project', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <div className="h-full">
                    <h2 className="font-bold text-center text-primary mb-3 text-lg leading-tight">
                      {item.title}
                    </h2>
                    <div className="flex flex-col md:block">
                      {item.imageUrl && (
                        <div className="avatar opacity-90 mx-auto md:mx-0 md:float-left md:mr-4 mb-3 md:mb-0">
                          <div className="w-32 h-32 mask mask-squircle">
                            <LazyImage
                              src={item.imageUrl}
                              alt={'thumbnail'}
                              placeholder={skeleton({
                                widthCls: 'w-full',
                                heightCls: 'h-full',
                                shape: '',
                              })}
                            />
                          </div>
                        </div>
                      )}
                      <div className="text-base-content text-sm text-justify leading-relaxed">
                        {(() => {
                          const parts = item.description.split('Tech Stack:');
                          if (parts.length === 2) {
                            return (
                              <>
                                <p className="mb-3">{parts[0].trim()}</p>
                                <div className="border-t border-base-300 pt-3">
                                  <p className="font-medium">
                                    <span className="font-semibold text-secondary">Tech Stack: </span>
                                    <span className="text-accent">{parts[1].trim()}</span>
                                  </p>
                                </div>
                              </>
                            );
                          }
                          return <p>{item.description}</p>;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <MdOpenInNew className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} projects`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
